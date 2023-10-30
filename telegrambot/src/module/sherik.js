const {Router} = require("@grammyjs/router")
const { sherik, ish, hodim, ustoz, shogirt } = require("../command/menu")

const Io = require("../utils/io")
const { havayoq, menu } = require("../helpers/keybort")
const Users = new Io("./database/sherikusers.json")


const router = new Router((ctx) => ctx.session.step)

const sherikkk = router.route('sherikkk')



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


    await ctx.reply("📚 <b>Texnologiya:</b>  \n\nTalab qilinadigan texnologiyalarni kiriting?\nTexnologiya nomlarini vergul bilan ajrating. Masalan, \n\nJava, C++, C#",{
        parse_mode: "HTML",
    })
    
    ctx.session.Fullname = ctx.message.text
    ctx.session.step = "shuch"
})



const uch = router.route('shuch')
uch.hears("Sherik kerak",sherik)
uch.hears("Ish joyi kerak", ish)
uch.hears("Hodim kerak", hodim)
uch.hears("Ustoz kerak", ustoz)
uch.hears("Shogird kerak", shogirt)


uch.on("message:text", async(ctx)=>{
    natija = ctx.message.text
    const id = ctx.from.id
    const texnologiya = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.texnologiya = texnologiya
    await Users.write(users)


    await ctx.reply("📞 Aloqa: \n\nBog`lanish uchun raqamingizni kiriting?\nMasalan, +998 90 123 45 67")
    ctx.session.Texnologiya = ctx.message.text
    ctx.session.step = "shturt"
})

const turt = router.route('shturt')
turt.hears("Sherik kerak",sherik)
turt.hears("Ish joyi kerak", ish)
turt.hears("Hodim kerak", hodim)
turt.hears("Ustoz kerak", ustoz)
turt.hears("Shogird kerak", shogirt)


turt.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const aloqa = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.aloqa = aloqa
    await Users.write(users)


    await ctx.reply("🌐 Hudud: \n\nQaysi hududdansiz?\nViloyat nomi, Toshkent shahar yoki Respublikani kiriting.")
    ctx.session.Aloqa = ctx.message.text
    ctx.session.step = "shbesh"
})

const besh = router.route('shbesh')
besh.hears("Sherik kerak",sherik)
besh.hears("Ish joyi kerak", ish)
besh.hears("Hodim kerak", hodim)
besh.hears("Ustoz kerak", ustoz)
besh.hears("Shogird kerak", shogirt)


besh.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const hudud = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.hudud = hudud
    await Users.write(users)


    await ctx.reply("💰 Narxi:\n\nTolov qilasizmi yoki Tekinmi?\nKerak bo`lsa, Summani kiriting?")
    ctx.session.Hudud = ctx.message.text
    ctx.session.step = "sholti"
})

const olti = router.route('sholti')
olti.hears("Sherik kerak",sherik)
olti.hears("Ish joyi kerak", ish)
olti.hears("Hodim kerak", hodim)
olti.hears("Ustoz kerak", ustoz)
olti.hears("Shogird kerak", shogirt)


olti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const narx = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.narx = narx
    await Users.write(users)


    await ctx.reply("👨🏻‍💻 Kasbi: \n\nIshlaysizmi yoki o`qiysizmi?\nMasalan, Talaba")
    ctx.session.Narxi = ctx.message.text
    ctx.session.step = "shyetti"
})

const yetti = router.route('shyetti')
yetti.hears("Sherik kerak",sherik)
yetti.hears("Ish joyi kerak", ish)
yetti.hears("Hodim kerak", hodim)
yetti.hears("Ustoz kerak", ustoz)
yetti.hears("Shogird kerak", shogirt)


yetti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const kasb = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.kasb = kasb
    await Users.write(users)


    await ctx.reply("🕰 Murojaat qilish vaqti: \n\nQaysi vaqtda murojaat qilish mumkin?\nMasalan, 9:00 - 18:00")
    ctx.session.Kasbi = ctx.message.text
    ctx.session.step = "shsakkiz"
})

const sakkiz = router.route('shsakkiz')
sakkiz.hears("Sherik kerak",sherik)
sakkiz.hears("Ish joyi kerak", ish)
sakkiz.hears("Hodim kerak", hodim)
sakkiz.hears("Ustoz kerak", ustoz)
sakkiz.hears("Shogird kerak", shogirt)


sakkiz.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const murojaat = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.murojaat = murojaat
    await Users.write(users)


    await ctx.reply("🔎 Maqsad: \n\nMaqsadingizni qisqacha yozib bering.")
    ctx.session.Murojaat = ctx.message.text
    ctx.session.step = "shtuqiz"
})


const tuqiz = router.route('shtuqiz')
tuqiz.hears("Sherik kerak",sherik)
tuqiz.hears("Ish joyi kerak", ish)
tuqiz.hears("Hodim kerak", hodim)
tuqiz.hears("Ustoz kerak", ustoz)
tuqiz.hears("Shogird kerak", shogirt)

tuqiz.on("message:text", async(ctx)=>{

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
    
    await ctx.reply(`<b>Sherik kerak:</b>\n \n🏅 <b>Sherik:</b>  ${ctx.session.Fullname} \n📚 <b>Texnologiya:</b>  ${ctx.session.Texnologiya} \n<b>🇺🇿 Telegram:</b> @${ctx.from.username} \n📞 <b>Aloqa:</b>  ${ctx.session.Aloqa} \n🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  \n💰 <b>Narxi:</b>  ${ctx.session.Narxi}  \n👨🏻‍💻 <b>Kasbi:</b>  ${ctx.session.Kasbi}  \n<b>🕰 Murojaat qilish vaqti:</b>  ${ctx.session.Murojaat}  \n🔎 <b>Maqsad:</b>  ${ctx.session.Maqsad} \n\n ${techHashtags}  \n\n #Sherik`,{
        parse_mode: "HTML",
    })
    await ctx.reply("Barcha ma'lumotlar to'grimi?",{
        reply_markup:{
            ...havayoq
        }
    })
    ctx.session.step = "sh10"
})

const sh10 = router.route('sh10')

sh10.hears("Ha", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const findstatusIndex = users.find((user) => user.userId == id);
    findstatusIndex.status = "waiting";
    await Users.write(users);

    const tec = findstatusIndex.texnologiya;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" "); 
    
    const message = `<b>Sherik kerak:</b>\n \n🏅 <b>Sherik:</b>  ${ctx.session.Fullname} \n📚 <b>Texnologiya:</b>  ${ctx.session.Texnologiya}   \n<b>🇺🇿 Telegram:</b> @${ctx.from.username} \n📞 <b>Aloqa:</b>  ${ctx.session.Aloqa}  \n🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  \n💰 <b>Narxi:</b>  ${ctx.session.Narxi}  \n👨🏻‍💻 <b>Kasbi:</b>  ${ctx.session.Kasbi}  \n<b>🕰 Murojaat qilish vaqti:</b>  ${ctx.session.Murojaat}  \n🔎 <b>Maqsad:</b>  ${ctx.session.Maqsad} \n${techHashtags}\n
    <a></a>
    \n #Sherik`


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

