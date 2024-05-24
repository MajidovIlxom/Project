const {Router} = require("@grammyjs/router")
const { sherik, ish, hodim, ustoz, shogirt } = require("../command/menu")

const Io = require("../utils/io")
const { havayoq, menu } = require("../helpers/keybort")
const Users = new Io("./database/hodimuser.json")


const router = new Router((ctx) => ctx.session.step)

const sherikkk = router.route('hodimm')

sherikkk.hears("Sherik kerak",sherik)
sherikkk.hears("Ish joyi kerak", ish)
sherikkk.hears("Hodim kerak", hodim)
sherikkk.hears("Ustoz kerak", ustoz)
sherikkk.hears("Shogird kerak", shogirt)

sherikkk.on("message:text", async(ctx) =>{
    const id = ctx.from.id
    const idora = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.idora = idora
    await Users.write(users)
    await ctx.reply("📚 <b>Texnologiya:</b>  \n\nTalab qilinadigan texnologiyalarni kiriting?\nTexnologiya nomlarini vergul bilan ajrating. Masalan, \n\nJava, C++, C#",{
        parse_mode: "HTML",
    })
    
    ctx.session.Idora = ctx.message.text
    ctx.session.step = "hbir"
})

const bir = router.route('hbir')
bir.hears("Sherik kerak",sherik)
bir.hears("Ish joyi kerak", ish)
bir.hears("Hodim kerak", hodim)
bir.hears("Ustoz kerak", ustoz)
bir.hears("Shogird kerak", shogirt)

bir.on("message:text", async(ctx) =>{
    const id = ctx.from.id
    const texnologiya = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.texnologiya = texnologiya
    await Users.write(users)
    await ctx.reply("📞 Aloqa: \n\nBog`lanish uchun raqamingizni kiriting?\nMasalan, +998 90 123 45 67",{
        parse_mode: "HTML",
    })
    ctx.session.Texnologiya = ctx.message.text
    ctx.session.step = "hikki"
})

const ikki = router.route('hikki')
ikki.hears("Sherik kerak",sherik)
ikki.hears("Ish joyi kerak", ish)
ikki.hears("Hodim kerak", hodim)
ikki.hears("Ustoz kerak", ustoz)
ikki.hears("Shogird kerak", shogirt)


ikki.on("message:text", async(ctx)=>{
    natija = ctx.message.text
    const id = ctx.from.id
    const aloqa  = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.aloqa = aloqa
    await Users.write(users)


    await ctx.reply("🌐 Hudud: \n\nQaysi hududdansiz?\nViloyat nomi, Toshkent shahar yoki Respublikani kiriting")
    ctx.session.Aloqa = ctx.message.text
    ctx.session.step = "huch"
})

const uch = router.route('huch')
uch.hears("Sherik kerak",sherik)
uch.hears("Ish joyi kerak", ish)
uch.hears("Hodim kerak", hodim)
uch.hears("Ustoz kerak", ustoz)
uch.hears("Shogird kerak", shogirt)


uch.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const hudud = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.hudud = hudud
    await Users.write(users)


    await ctx.reply("✍️Mas'ul ism sharifi?.")
    ctx.session.Hudud = ctx.message.text
    ctx.session.step = "hturt"
})

const turt = router.route('hturt')
turt.hears("Sherik kerak",sherik)
turt.hears("Ish joyi kerak", ish)
turt.hears("Hodim kerak", hodim)
turt.hears("Ustoz kerak", ustoz)
turt.hears("Shogird kerak", shogirt)


turt.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const masul = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.masul = masul
    await Users.write(users)


    await ctx.reply("🕰 Murojaat qilish vaqti: \n\nQaysi vaqtda murojaat qilish mumkin?\nMasalan, 9:00 - 18:00")
    ctx.session.Masul = ctx.message.text
    ctx.session.step = "hbesh"
})

const besh = router.route('hbesh')
besh.hears("Sherik kerak",sherik)
besh.hears("Ish joyi kerak", ish)
besh.hears("Hodim kerak", hodim)
besh.hears("Ustoz kerak", ustoz)
besh.hears("Shogird kerak", shogirt)


besh.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const murojat = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.murojat = murojat
    await Users.write(users)


    await ctx.reply("🕰 Ish vaqtini kiriting?")
    ctx.session.Murojat = ctx.message.text
    ctx.session.step = "holti"
})

const olti = router.route('holti')
olti.hears("Sherik kerak",sherik)
olti.hears("Ish joyi kerak", ish)
olti.hears("Hodim kerak", hodim)
olti.hears("Ustoz kerak", ustoz)
olti.hears("Shogird kerak", shogirt)


olti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const ishvaqti = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.ishvaqti = ishvaqti
    await Users.write(users)


    await ctx.reply("💰 Maoshni kiriting?")
    ctx.session.Ishvaqti = ctx.message.text
    ctx.session.step = "hyetti"
})

const yetti = router.route('hyetti')
yetti.hears("Sherik kerak",sherik)
yetti.hears("Ish joyi kerak", ish)
yetti.hears("Hodim kerak", hodim)
yetti.hears("Ustoz kerak", ustoz)
yetti.hears("Shogird kerak", shogirt)


yetti.on("message:text", async(ctx)=>{
    const id = ctx.from.id
    const maosh = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.maosh = maosh
    await Users.write(users)


    await ctx.reply("‼️ Qo`shimcha ma`lumotlar?")
    ctx.session.Maosh = ctx.message.text
    ctx.session.step = "hsakkiz"
})


const sakkiz = router.route('hsakkiz')
sakkiz.hears("Sherik kerak",sherik)
sakkiz.hears("Ish joyi kerak", ish)
sakkiz.hears("Hodim kerak", hodim)
sakkiz.hears("Ustoz kerak", ustoz)
sakkiz.hears("Shogird kerak", shogirt)

sakkiz.on("message:text", async(ctx)=>{

    const id = ctx.from.id
    const qushimchamalumot = ctx.message.text
    const users = await Users.read()
    const findUser = users.find((user) => user.userId == id)
    findUser.qushimchamalumot = qushimchamalumot
    findUser.telegramUsername = ctx.from.username
    await Users.write(users)
    ctx.session.Qushimchamalumot = ctx.message.text

    const tec = findUser.texnologiya;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" ");

    await ctx.reply(`<b>Hodim kerak:</b>\n \n🏅 <b>Idora:</b>  ${ctx.session.Idora}  \n<b>📚 Texnologiya:</b>  ${ctx.session.Texnologiya}\n<b>🇺🇿 Telegram:</b> @${ctx.from.username} \n📞 <b>Aloqa:</b>  ${ctx.session.Aloqa}  \n🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  \n <b>✍️Mas'ul:</b>  ${ctx.session.Masul}  \n👨🏻‍💻 <b>Murojat vaqti:</b>  ${ctx.session.Murojat}  \n<b>🕰 Ish vaqtini kiriting:</b>  ${ctx.session.Murojat}  \n🔎 <b>Maosh:</b>  ${ctx.session.Maosh} \n\n ${techHashtags}\n\n #Hodim`,
    {
        parse_mode: "HTML",
        })
    await ctx.reply("Barcha ma'lumotlar to'grimi?",{
        reply_markup:{
            ...havayoq
        }
    })
    ctx.session.step = "h10"
})

const sh10 = router.route('h10')

sh10.hears("Ha", async (ctx) => {
    const id = ctx.from.id;
    const users = await Users.read();
    const findstatusIndex = users.find((user) => user.userId == id);
    findstatusIndex.status = "waiting";
    await Users.write(users);

    const tec = findstatusIndex.texnologiya;
    const techHashtags = tec.split(",").map(item => `#${item.trim()}`).join(" ");

    const message = `<b>Hodim kerak:</b>\n \n🏅 <b>Idora:</b>  ${ctx.session.Idora}  \n<b>📚 Texnologiya:</b>  ${ctx.session.Texnologiya}\n<b>🇺🇿 Telegram:</b> @${ctx.from.username} \n📞 <b>Aloqa:</b>  ${ctx.session.Aloqa}  \n🌐 <b>Hudud:</b>  ${ctx.session.Hudud}  \n <b>✍️Mas'ul:</b>  ${ctx.session.Masul}  \n👨🏻‍💻 <b>Murojat vaqti:</b>  ${ctx.session.Murojat}  \n<b>🕰 Ish vaqtini kiriting:</b>  ${ctx.session.Murojat}  \n🔎 <b>Maosh:</b>  ${ctx.session.Maosh} \n\n ${techHashtags}\n\n #Hodim`

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

