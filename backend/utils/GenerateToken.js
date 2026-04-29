require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.generateToken = (payload, passwordReset = false) => {

    const loginExpiry = process.env.LOGIN_TOKEN_EXPIRATION || "30d";
    const resetExpiry = process.env.PASSWORD_RESET_TOKEN_EXPIRATION || "2m";

    return jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: passwordReset ? resetExpiry : loginExpiry
    });
}