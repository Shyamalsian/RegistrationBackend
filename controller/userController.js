const HttpError = require("../model/HttpError")
const userList = require('../model/userModel')

const addUser = async(req,res,next)=>{
    // console.log(req.body)
    // const {id,firstName,lastName,email} = req.body
    const {id,firstName,lastName,email} = req.body.detail
    let fuser
    try{
        fuser =await userList.findOne({email:email})
    }
    catch(err)
    {
        console.log(err)
        const error = new HttpError('Error adding user',400)
        return next(error)
    }
    if(fuser)
    {
        // return next(new HttpError("User email already exist",401))
        const error = new HttpError("User already registered",401)
        return next(error)
    }
    else{
        const newUser = new userList({
            id,firstName,lastName,email
        })
        try{
        await newUser.save();
        return res.status(200).json("User Added")
        
        }
        catch(err)
        {
            console.log("Error saving ----")
            console.log(err)
        }
    }
    
}

const getUser = async(req,res,next) => {
    let data
    try{
     data = await userList.find({})
    }
    catch(err){
        const error = new HttpError("Error loading all data")
        return next(error)
    }
    res.send(data)
}

const checkEmail = async(req,res,next)=>{
    const {email} = req.body
    let fuser
    try{
        fuser = await userList.findOne({email:email})
    }
    catch(err)
    {
        const error = new HttpError("Error searching email",400)
        return next(error)
    }
    if(fuser)
    {
        res.send(fuser)
    }
    else{
        const error = new HttpError("Can't find User",404)
        return next(error)
    }
}

const updateUser = async(req,res,next) => {
    console.log(req.body)
    const {id,firstName,lastName,email} = req.body.newDetail
    let fuser
    try{
        fuser =await userList.findOne({email:email})
    }catch(err)
    {
        console.log((err))
    }
    console.log(fuser)
    fuser.id = id
    fuser.firstName = firstName
    fuser.lastName = lastName
    fuser.email = email

    await fuser.save();
    res.send("User Updated successfully")
}

exports.checkEmail = checkEmail
exports.getUser = getUser
exports.addUser = addUser
exports.updateUser = updateUser