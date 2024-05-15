const jwt = require('jsonwebtoken')

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (decoded) return decoded
        if(err) return { error: true }
    })
}

exports.createToken = (user) => {
    const { role, id, fullName } = user;
    if(!role || !id || !fullName ){
        return false
    }
    return jwt.sign({ id, role, fullName }, process.env.SECRET_KEY)
}

exports.createTokenVerifyEmail = (otp, email) => {
    if(!otp || !email){
        return false
    }
    return jwt.sign({ otp, email }, process.env.SECRET_KEY_VERIFY_EMAIL, { expiresIn: "2m" })
}

exports.verifyTokenForgotPassword = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY_FOR_FORGET_PASSWORD, { expiresIn: 2 * 60 * 1000 })
}

exports.verifyTokenVerifyEmail = (token) => {
    try{
        return jwt.verify(token, process.env.SECRET_KEY_VERIFY_EMAIL)
    }catch(err){
        if(err.name === 'TokenExpiredError'){
            return { expired: true }
        }
        return { error: err.message}
    }
}