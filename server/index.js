require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express()
const routes = require('./routes/index');
const compression = require('compression');
const { responseError } = require('./helpers/responseHandler');


app.use(
    cors({
        origin: true,
        credentials: true
    })
)
app.use(compression())
app.use(express.json({ limit: '2mb' })) // dibatasi ke 2mb agar menghindari serangan denial of service di mana seseorang mungkin mencoba mengirimkan request dengan body yang sangat besar untuk membebani server.
app.use(express.urlencoded({ extended: true, limit: '2mb' }))

app.use('/api', routes)

app.all('*', (req, res) => {
    responseError(res, 404, "API Not Found")
})

if(!module.parent){
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
    })
}
module.exports = app;