const jwt = require('jsonwebtoken')
const db = require('../../models')
const express = require("express")
const app = express()

//  access control allow origin 
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  })
const verifyToken = (req, res, next) => {
    // catch value token from header
    const token = req.headers['x-access-token']
    if( !token ) return res.status(401).send({message : 'invalid token !'})
    // decode token that we get from user login(jwt given)
    const decode = jwt.verify(token,process.env.ONLINE_BOOKSTORE)
    req.userId = decode.userId
    next()
}
// :::::::::: check admin :::::::::::::::::::::::::
const isAdmin =  async (req, res, next) =>{
    const userId = req.userId
    // check user login or not
    if(!userId) 
        return res.status(401).send({message:'unauthorize , invalid token!'})
    const user = await db.users.findById(userId)
    if(user?.role != 'admin')
        return res.status(401).send({message: 'you are not admin. To access get user , you need to login as admin'})
    next()
}
// ::::::::::::::::::::: check user :::::::::::::::::::::::::
const isUser =  async (req, res, next) =>{
    const userId = req.userId
    if(!userId) 
        return res.status(401).send({message:'unauthorize , invalid token!'})
    const user = await db.users.findById(userId)
    if(user.role != 'user')
        return res.status(401).send({message: 'you are not admin. To access get more exploriment , you need to login as seller or admin'})
    next()
}
// :::::::::::::::::::::: check seller ::::::::::::::::::::::::::::::
const isSeller =  async (req, res, next) =>{
    const userId = req.userId
    if(!userId) 
        return res.status(401).send({message:'unauthorize , invalid token!'})
    const user = await db.users.findById(userId)
    if(user.role != 'seller')
        return res.status(401).send({message: 'you are not seller. To access to create products , you need to login as seller'})
    next()
}

module.exports={
    verifyToken,
    isAdmin,
    isUser,
    isSeller
}