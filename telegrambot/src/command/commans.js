const {Composer} = require("grammy")
const {menu,} = require("../helpers/keybort")

const bot = new Composer()

bot.command("start", async(ctx) =>{
    await ctx.reply(`<b>Assalom alaykum ${ctx.from.first_name}
    UstozShogird kanalining rasmiy botiga xush kelibsiz!</b>

    /help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!`,{    
        parse_mode: "HTML",
        reply_markup:{
            ...menu,
        },
    })
})

bot.command("help", async(ctx) =>{
    ctx.reply("UzGeeks faollari tomonidan tuzilgan Ustoz-Shogird kanali.\n\n Bu yerda Programmalash bo`yicha \n#Ustoz, \n#Shogird,\n#oquvKursi,\n#Sherik,\n#Xodim va \n#IshJoyi \ntopishingiz mumkin.\n \nE'lon berish: @Test1darsbot\n \nKanal @testuchunN1")
})
module.exports = bot