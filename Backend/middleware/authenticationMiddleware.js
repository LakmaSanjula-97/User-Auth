const asyncHandler = require("express-async-handler");
const User = require("../models/Staff.Model");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async(req, res, next) => { 
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try{
           token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user =  await User.findById(decoded.id).select('-password')

        next()
       }catch (error){
           console.error(error)
           res.status(401)
           throw new Error('Not authorized, token failed')
       }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})


const manager = (req, res, next) => {
    if(req.user && req.user.role === "manager"){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as a manager')
    }
}

const admin = (req, res, next) => {
    if(req.user && req.user.role === "admin"){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as a admin')
    }
}

module.exports = { protect, manager, admin };