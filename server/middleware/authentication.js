const { responseError } = require("../helpers/responseHandler")
const { verifyTokenVerifyEmail } = require("../utils/jwt")

exports.verifyEmailMiddleware = async(req, res, next) => {
    const { token } = req.body
    if(!token) return responseError(res, 403, 'Forbidden')
    const verificationResult = verifyTokenVerifyEmail(token)

    if(verificationResult.expired) return responseError(res, 401, "OTP Expired")

    if(verificationResult.error) return responseError(res, 500, verificationResult.error)

    req.email = verificationResult.email
    req.otpJWT = verificationResult.otp;
        
    next();
}