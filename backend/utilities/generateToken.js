const jwt = require('jsonwebtoken')

module.exports.createToken = async(data)=>{
    const token = await jwt.sign(data, process.env.ACCESS_SECRET_TOKEN, {
        expiresIn : '7d'
    })
    return token
}