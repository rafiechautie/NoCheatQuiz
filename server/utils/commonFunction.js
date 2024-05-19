const bcrypt = require('bcrypt')
const CryptoJs = require('crypto-js')

const generateOtp = () => {
    const otpLength = 6
    const min = Math.pow(10, otpLength - 1)
    const max = Math.pow(10, otpLength) - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// kembalian dari process env salt_rounds adalah string sehingga harus dikonversi menjadi Number
const hashPassword = async(password) => {
    return bcrypt.hash(password, Number(process.env.SALT_ROUNDS))
}

const comparePassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
} 

/**
 * 
 * {
  "email": "rafiqauti13@gmail.com",
  "password": "12345678",
  "fullName": "Muhammad Rafie Chautie",
  "username": "chautie1",
  "confirmPassword": "12345678",
  "role": "1"
}
 */

const decryptObjectPayload = token => {
    try{
        console.log(token, "ni adalah toklen")
        const bytes = CryptoJs.AES.decrypt(token, process.env.CRYPTOJS_SECRET)
        const decryptedText = bytes.toString(CryptoJs.enc.Utf8);
        return JSON.parse(decryptedText);
    }catch(error){
        return null
    }
}

const decryptTextPayload = token => {
    try{
        const bytes = CryptoJs.AES.decrypt(token, process.env.CRYPTOJS_SECRET)
        return bytes.toString(CryptoJs.enc.Utf8)
    }catch(error){
        return null
    }
}

module.exports = {
    generateOtp,
    hashPassword,
    comparePassword,
    decryptObjectPayload,
    decryptTextPayload
}