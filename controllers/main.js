const CustomError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        throw new CustomError('provide username or password', 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn:'30d'})

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req, res) => {




    const luckyNum = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello `, secret:`your data is ${luckyNum}`})

}

module.exports = {
    login, dashboard
}