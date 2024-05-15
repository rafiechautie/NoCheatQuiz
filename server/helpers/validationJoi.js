const Joi = require('joi')

const validateBodyGenerateOtpToEmail = reqBody => {
    const schema = Joi.object({
        email: Joi.string()
        .email({ tlds: { allow: false }})
        .required()
        .messages({
            'string.base': 'email must be a string',
            'string.empty': 'email is required',
            'string.email': 'email must be a valid email address',
            'any.required': 'email is required'
        })
    })

    const { error } = schema.validate(reqBody, {
        abortEarly: false
    })

    if(error){
        return error.details.map(err => err.message).join(', ')
    }

    return null
}

const validateBodyRegister = reqBody => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).required().message({
            'number.base': 'username must be a string',
            'number.min': 'username must be at least three digits long',
            'any.required': 'username is required'
        }),
        email: Joi.string().email({ tlds: { allow: false }}).required().message({
            'string.base': 'email must be a string',
            'string.empty': 'email is required',
            'string.email': 'email must be a valid email address',
            'any.required': 'email  is required'
        }),
        password: Joi.string().min(6).required().message({
            'string.min': 'password must be at least six characters long',
            'any.required': 'password is required'
        }),
        confirmPassword: Joi.string().min(6).valid(Joi.ref('password')).required().message({
            'any.only': 'Password and Confirm Password must match'
        }),
        role: Joi.number().required().valid(1, 2, 3).message({
            'number.base': 'role must be a number',
            'any.required': 'role is required',
            'any.only': 'role must be one of 1, 2, 3'
        })
    })

    const { error } = schema.validate(reqBody, {
        abortEarly: false
    })

    if(error) return error.details.map(err => err.message).join(', ')
}

const validateBodyLogin = reqBody => {
    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false }}).required().messages({
            'string.base': 'email must be a string',
            'string.empty': 'email is required',
            'string.email': 'email must be a valid email address',
            'any.required': 'email is required'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'password must be at least six characters long',
            'any.required': 'password is required'
        })
    })

    const { error } = schema.validate(reqBody, {
        abortEarly: false
    })

    if(error) return error.details.map(err => err.message).join(', ')
}

const validateBodyVerifyOtp = reqBody => {
    const schema = Joi.object({
        otp: Joi.number().min(100000).max(999999).required().messages({
            'number.base': 'code must be a number',
            'number.min': 'code must be at least six digits long',
            'number.max': 'code must be at most six digits long',
            'any.required': 'code is required'
        })
    })

    const { error } = schema.validate(reqBody, {
        abortEarly: false
    })

    if(error){
        return error.details.map(err => err.message).join(', ')
    }

    return null
}

module.exports = {
    validateBodyGenerateOtpToEmail,
    validateBodyRegister,
    validateBodyLogin,
    validateBodyVerifyOtp
}