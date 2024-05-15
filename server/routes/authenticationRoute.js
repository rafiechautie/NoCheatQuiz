const express = require('express')
const {
    register,
    verifyEmail,
    verifyOtp,
    login
} = require('../controllers/authenticationController')
const { verifyEmailMiddleware } = require('../middleware/authentication')


const router = express.Router()

router.post('/register', register)
router.post('/verify/email', verifyEmail)
router.post('/verify/otp', verifyEmailMiddleware, verifyOtp,)
router.post('/login', login)


module.exports = router