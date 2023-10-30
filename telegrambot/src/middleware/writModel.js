const Io = require("../utils/io")

const Userrs = new Io("./database/ishuser.json")
const Userr = require("../model/ishjoy.model")
const Hodim = new Io("./database/hodimuser.json")
const User = require("../model/hodim.model")

const Ustoz = new Io("./database/ustozuser.json")
const ustoz = require("../model/ustoz.model")

const Shogird = new Io("./database/shogirtuser.json")
const shogird = require("../model/shogird.model")


const writeIdIsh = async(ctx,next)=>{
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


const writeHodim = async(ctx,next)=>{
    const users = await Hodim.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.userId==id)
    if(!findUser){
        const newUser = new User(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Hodim.write(data)
    }
    next()
}


const writeUstoz = async(ctx,next)=>{
    const users = await Ustoz.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.userId==id)
    if(!findUser){
        const newUser = new ustoz(id)
        const data = users.length ? [...users, newUser]: [newUser]
        await Ustoz.write(data)
    }
    next()
}


const writeShogird = async(ctx,next)=>{
    const users = await Shogird.read()
    const id = ctx.from.id
    const findUser = users.find((user)=> user.userId==id)
    if(!findUser){
        const newUser = new ustoz(id)
        const data = shogird.length ? [...users, newUser]: [newUser]
        await Shogird.write(data)
    }
    next()
}

module.exports = {writeIdIsh, writeHodim, writeUstoz, writeShogird}