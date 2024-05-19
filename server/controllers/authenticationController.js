const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { responseError, responseSuccess } = require('../helpers/responseHandler')
const { validateBodyGenerateOtpToEmail, validateBodyLogin, validateBodyVerifyOtp, validateBodyRegister } = require('../helpers/validationJoi')
const { generateOtp, hashPassword, comparePassword, decryptObjectPayload, decryptTextPayload } = require('../utils/commonFunction')
const { handleSendMailVerifyOTP } = require('../helpers/mailHelper')
const { createTokenVerifyEmail, createToken } = require('../utils/jwt')

exports.register = async (req, res) => {
    try{

        const decryptBody = decryptObjectPayload(req.body.token)

        if(!decryptBody) return responseError(res, 400, 'Bad Request', 'Invalid encrypted payload')

        const validate = validateBodyRegister(decryptBody)

        if (validate) return responseError(res, 400, 'Validation Failed', validate)

        const { email, password, fullName, username, confirmPassword, role } = decryptBody

        if(password !== confirmPassword) return responseError(res, 400, "Password and Confirm Password do not match")

        const existingUser = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        if(existingUser) return responseError(res, 400, 'Email already exists')

        const encryptedPassword = await hashPassword(password)

        const newUser = await prisma.users.create({
            data: {
                email: email,
                username: username,
                fullName: fullName,
                password: encryptedPassword,
                role: Number(role)
            }
        })

        return responseSuccess(res, 201, "User registered successfully", {
            email: newUser.email,
            fullName: newUser.fullName,
            username: newUser.username
        })

    }catch(error){
        return responseError(res, error.status, error.message)
    }
}

exports.verifyEmail = async (req, res) => {
    try{
        const { email } = req.body
        const emailDecoded = decryptTextPayload(email)

        if(!emailDecoded) return responseError(res, 400, 'Bad Request', 'Invalid Payload')

        const validate = validateBodyGenerateOtpToEmail({ email: emailDecoded })

        if(validate) responseError(res, 400, 'Validation Failed', validate)

        const user = await prisma.users.findUnique({
            where: {
                email: emailDecoded
            }
        });

        if(user) return responseError(res, 400, 'Email already exist', { email: user.email })

        const OTP = generateOtp()

        const status = handleSendMailVerifyOTP(OTP, emailDecoded)

        if(status){
            return responseSuccess(res, 201, 'success', {
                token: createTokenVerifyEmail(OTP, email),
                expire: Date.now() + 2 * 60 * 1000
            })
        }
    }catch(err){
        return responseError(res, err.status, err.message)
    }
}

exports.verifyOtp = async(req, res) => {
    try{
        const { otp } = req.body

        const validate = validateBodyVerifyOtp(otp)

        if(validate) return responseError(res, 400, 'Validation Failed', validate)

        const { otpJWT, email } = req;
        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        })
        if(user) return responseError(res, 400, 'Email already exist', { email: user.email })

        if(otp != otpJWT) return responseError(res, 404, 'OTP Invalid')

        return responseSuccess(res, 200, 'success', 'Success Verify')
    }catch(err){
        return responseError(res, err.status, err.message)
    }
}

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body

        console.log(email, "ni adalah email")
        console.log(password, "ni adalah password")

        const emailDecrypted = decryptTextPayload(email)
        const passwordDecrypted = decryptTextPayload(password)

        console.log(emailDecrypted, "ni adalah email decrypted")
        console.log(passwordDecrypted, "ni adalah password decrypted")

        if (!emailDecrypted || !passwordDecrypted) return responseError(res, 400, 'Bad Request', 'Invalid Payload')
        
        const validate = validateBodyLogin({
            email: emailDecrypted,
            password: passwordDecrypted
        })

        if(validate) return responseError(res, 400, 'Validation Failed', validate)

        const user = await prisma.users.findUnique({
            where: {
                email: emailDecrypted
            }
        })

        const isMatch = comparePassword(passwordDecrypted, user.password)

        if(!user || !isMatch) return responseError(res, 400, 'Bad Request', 'Invalid email or password')

        const token = createToken(user)

        if(!token) return responseError(res, 500, 'Internal Server Error', 'Failed to create token');

        return responseSuccess(res, 200, 'success', {
            token: token
        })

    }catch(error){
        console.log(error, "ni adalah error")
        responseError(res, error.status, error.message)
    }
}
