const CustomError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomError('No token found', 400)
    }
    const token = authHeader.split(' ')[1]
    try{
        const decorded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decorded)
    }catch (e){
        throw new CustomError('Not authorised', 401)
    }
    next();
}

module.exports = authenticationMiddleware