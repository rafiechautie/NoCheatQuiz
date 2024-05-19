const { Router } = require('express')

const authRoute = require('./authenticationRoute')

const router = Router()

router.use('/auth', authRoute)

module.exports = router