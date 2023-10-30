const Io = require("../utils/io")
const Users = new Io("./database/reklomuchun.json")
const User = require("../model/user")

const Userrs = new Io("./database/sherikusers.json")
const Userr = require("../model/sherik.model")


const isChecked = async(ctx,next)=>{
    const users = await Users.read()
    const telegramId = ctx.from.id
    const firstname = ctx.from.first_name
    const findUser = users.find((user)=> user.userId==telegramId)
    if(!findUser){
        const newUser = new User(telegramId,firstname)
        const data = users.length ? [...users, newUser]: [newUser]
        await Users.write(data)
    }else if(!findUser.status){
        findUser.status = true
        await Users.write(users)
    }
    next()
}

const writeId = async(ctx,next)=>{
    const users = await Userrs.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.userId==id)
    if(!findUser){
        const newUser = new Userr(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Userrs.write(data)
    }
    next()
}

module.exports = {
    isChecked,
    writeId
}