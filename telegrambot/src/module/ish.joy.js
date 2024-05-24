const {Router} = require("@grammyjs/router")
const { sherik, ish, hodim, ustoz, shogirt } = require("../command/menu")

const Io = require("../utils/io")
const { havayoq, menu } = require("../helpers/keybort")
const Users = new Io("./database/ishuser.json")


const router = new Router((ctx) => ctx.session.step)

const sherikkk = router.route('ishjoy')

sherikkk.hears("Sherik kerak",sherik)
sherikkk.hears("Ish joyi kerak", ish)
sherikkk.hears("Hodim kerak", hodim)
sherikkk.hears("Ustoz kerak", ustoz)
sherikkk.hears("Shogird kerak", shogirt)

sherikkk.on("message:text", async(ctx) =>{
    const id = ctx.from.id
    const firstName = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.firstName = firstName
    await Users.write(users)
    await ctx.reply(`<b>🕑 Yosh:</b> 

    Yoshingizni kiriting?
    Masalan, 19`,{
        parse_mode: "HTML",
    })
    
    ctx.session.Fullname = ctx.message.text
    ctx.session.step = "ishbir"
})

const bir = router.route('ishbir')
bir.hears("Sherik kerak",sherik)
bir.hears("Ish joyi kerak", ish)
bir.hears("Hodim kerak", hodim)
bir.hears("Ustoz kerak", ustoz)
bir.hears("Shogird kerak", shogirt)

bir.on("message:text", async(ctx) =>{
    const id = ctx.from.id
    const yosh = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.yosh = yosh
    await Users.write(users)
    await ctx.reply("📚 <b>Texnologiya:</b>  \n\nTalab qilinadigan texnologiyalarni kiriting?\nTexnologiya nomlarini vergul bilan ajrating. Masalan, \n\nJava, C++, C#",{
        parse_mode: "HTML",
    })
    ctx.session.Yosh = ctx.message.text
    ctx.session.step = "ishikki"
})

const ikki = router.route('ishikki')
ikki.hears("Sherik kerak",sherik)
ikki.hears("Ish joyi kerak", ish)
ikki.hears("Hodim kerak", hodim)
ikki.hears("Ustoz kerak", ustoz)
ikki.hears("Shogird kerak", shogirt)


ikki.on("message:text", async(ctx)=>{
    natija = ctx.message.text
    const id = ctx.from.id
    const texnologiya = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.texnologiya = texnologiya
    await Users.write(users)


    await ctx.reply("📞 Aloqa: \n\nBog`lanish uchun raqamingizni kiriting?\nMasalan, +998 90 123 45 67")
    ctx.session.Texnologiya = ctx.message.text
    ctx.session.step = "ishuch"
})

const uch = router.route('ishuch')
uch.hears("Sherik kerak",sherik)
uch.hears("Ish joyi kerak", ish)
uch.hears("Hodim kerak", hodim)
uch.hears("Ustoz kerak", ustoz)
uch.hears("Shogird kerak", shogirt)


uch.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const aloqa = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.aloqa = aloqa
    await Users.write(users)


    await ctx.reply("🌐 Hudud: \n\nQaysi hududdansiz?\nViloyat nomi, Toshkent shahar yoki Respublikani kiriting.")
    ctx.session.Aloqa = ctx.message.text
    ctx.session.step = "ishturt"
})

const turt = router.route('ishturt')
turt.hears("Sherik kerak",sherik)
turt.hears("Ish joyi kerak", ish)
turt.hears("Hodim kerak", hodim)
turt.hears("Ustoz kerak", ustoz)
turt.hears("Shogird kerak", shogirt)


turt.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const hudud = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.hudud = hudud
    await Users.write(users)


    await ctx.reply("💰 Narxi:\n\nTolov qilasizmi yoki Tekinmi?\nKerak bo`lsa, Summani kiriting?")
    ctx.session.Hudud = ctx.message.text
    ctx.session.step = "ishbesh"
})

const besh = router.route('ishbesh')
besh.hears("Sherik kerak",sherik)
besh.hears("Ish joyi kerak", ish)
besh.hears("Hodim kerak", hodim)
besh.hears("Ustoz kerak", ustoz)
besh.hears("Shogird kerak", shogirt)


besh.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const narx = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.narx = narx
    await Users.write(users)


    await ctx.reply("👨🏻‍💻 Kasbi: \n\nIshlaysizmi yoki o`qiysizmi?\nMasalan, Talaba")
    ctx.session.Narxi = ctx.message.text
    ctx.session.step = "isholti"
})

const olti = router.route('isholti')
olti.hears("Sherik kerak",sherik)
olti.hears("Ish joyi kerak", ish)
olti.hears("Hodim kerak", hodim)
olti.hears("Ustoz kerak", ustoz)
olti.hears("Shogird kerak", shogirt)


olti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const kasb = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.kasb = kasb
    await Users.write(users)


    await ctx.reply("🕰 Murojaat qilish vaqti: \n\nQaysi vaqtda murojaat qilish mumkin?\nMasalan, 9:00 - 18:00")
    ctx.session.Kasbi = ctx.message.text
    ctx.session.step = "ishyetti"
})

const yetti = router.route('ishyetti')
yetti.hears("Sherik kerak",sherik)
yetti.hears("Ish joyi kerak", ish)
yetti.hears("Hodim kerak", hodim)
yetti.hears("Ustoz kerak", ustoz)
yetti.hears("Shogird kerak", shogirt)


yetti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const murojaat = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.murojaat = murojaat
    await Users.write(users)


    await ctx.reply("🔎 Maqsad: \n\nMaqsadingizni qisqacha yozib bering.")
    ctx.session.Murojaat = ctx.message.text
    ctx.session.step = "ishsakkiz"
})


const sakkiz = router.route('ishsakkiz')
sakkiz.hears("Sherik kerak",sherik)
sakkiz.hears("Ish joyi kerak", ish)
sakkiz.hears("Hodim kerak", hodim)
sakkiz.hears("Ustoz kerak", ustoz)
sakkiz.hears("Shogird kerak", shogirt)

sakkiz.on("message:text", async(ctx)=>{

    const id = ctx.from.id
    const maqsad = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.maqsad = maqsad
    findUser.telegramUsername = ctx.from.username
    await Users.write(users)
    ctx.session.Maqsad = ctx.message.text

    const tec = findUser.texnologiya;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" ");

    await ctx.reply(`<b>Ish joyi kerak:</b>\n \n🏅 <b>Hodim:</b>  ${ctx.session.Fullname}  \n<b>🕑 Yosh:</b>  ${ctx.session.Yosh}\n📚 <b>Texnologiya:</b>  ${ctx.session.Texnologiya} \n<b>🇺🇿 Telegram:</b> @${ctx.from.username} \n📞 <b>Aloqa:</b>  ${ctx.session.Aloqa}  \n🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  \n💰 <b>Narxi:</b>  ${ctx.session.Narxi}  \n👨🏻‍💻 <b>Kasbi:</b>  ${ctx.session.Kasbi}  \n<b>🕰 Murojaat qilish vaqti:</b>  ${ctx.session.Murojaat}  \n🔎 <b>Maqsad:</b>  ${ctx.session.Maqsad} \n\n ${techHashtags}\n\n #IshJoyi`,
    {
        parse_mode: "HTML",
        })
    await ctx.reply("Barcha ma'lumotlar to'grimi?",{
        reply_markup:{
            ...havayoq
        }
    })
    ctx.session.step = "ish10"
})

const sh10 = router.route('ish10')

sh10.hears("Ha", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const findstatusIndex = users.find((user) => user.userId == id);
    findstatusIndex.status = "waiting";
    await Users.write(users);

    const tec = findstatusIndex.texnologiya;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" ");

    const message = `<b>Ish joyi kerak:</b>\n \n
    🏅 <b>Hodim:</b>  ${ctx.session.Fullname}  
    <b>🕑 Yosh:</b>  ${ctx.session.Yosh}
    📚 <b>Texnologiya:</b>  ${ctx.session.Texnologiya} 
    <b>🇺🇿 Telegram:</b> @${ctx.from.username} 
    📞 <b>Aloqa:</b>  ${ctx.session.Aloqa}  
    🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  
    💰 <b>Narxi:</b>  ${ctx.session.Narxi}  
    👨🏻‍💻 <b>Kasbi:</b>  ${ctx.session.Kasbi}  
    <b>🕰 Murojaat qilish vaqti:</b>  ${ctx.session.Murojaat}  
    🔎 <b>Maqsad:</b>  ${ctx.session.Maqsad} \n
    ${techHashtags}\n\n 
    #IshJoyi`

    await ctx.api.sendMessage("-1001759215004", message ,{
        parse_mode: "HTML"
    });

    await ctx.reply("👮‍♀️ Qabul qilindi",{
        reply_markup:{
            ...menu
        }
    });
    ctx.session.step = "hammasi";
});



sh10.hears("Yoq", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const findstatus = users.filter((user) => user.userId != id);
    await Users.write(findstatus);
    await ctx.reply("👮‍♀️ Qabul qilinmadi", {
        reply_markup:{
            ...menu
        }
    });

    ctx.session.step = "hammasi";
})

module.exports = router

