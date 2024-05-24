const sherik =  async(ctx) => {
    await ctx.reply("<b>Sherik topish uchun ariza berish</b>  \n\nHozir sizga birnecha savollar beriladi. \nHar biriga javob bering. \nOxirida agar hammasi to`g`ri bo`lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.",{
        parse_mode: "html"
    })
    await ctx.reply(`<b>Ism va Familyangizni kiriting!</b>`,{
        parse_mode: "HTML",
    })
    ctx.session.step = "sherikkk"
}


const ish = async(ctx) => {
    await ctx.reply("<b>Ish joyi topish uchun ariza berish</b>   \n\nHozir sizga birnecha savollar beriladi. \nHar biriga javob bering. \nOxirida agar hammasi to`g`ri bo`lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.",{
        parse_mode: "HTML",
    })
    await ctx.reply("<b>Ism, familiyangizni kiriting? </b>",{
        parse_mode: "HTML",
    })
    ctx.session.step = "ishjoy"
}



const hodim = async (ctx) => {
    await ctx.reply(
        `<b>Xodim topish uchun ariza berish</b>\n\nHozir sizga birnecha savollar beriladi. \nHar biriga javob bering. \nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{
            parse_mode: "HTML"
        });

    await ctx.reply("<b>🎓 Idora nomi?</b>",{
            parse_mode: "HTML"
        });
    ctx.session.step = "hodimm";
};





const ustoz = async(ctx) => {
    await ctx.reply("<b>Ustoz topish uchun ariza berish</b>  \n\nHozir sizga birnecha savollar beriladi. \nHar biriga javob bering. \nOxirida agar hammasi to`g`ri bo`lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.",{
        parse_mode: "HTML",
    })
    await ctx.reply("<b>Ism, familiyangizni kiriting?</b>",{
        parse_mode: "HTML",
    })
    ctx.session.step = "ustoz"
}


const shogirt = async(ctx) => {
    await ctx.reply("<b>Shogird topish uchun ariza berish </b> \n\nHozir sizga birnecha savollar beriladi. \nHar biriga javob bering. \nOxirida agar hammasi to`g`ri bo`lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.",{
        parse_mode: "HTML",
    })
    await ctx.reply("<b>Ism, familiyangizni kiriting?</b>",{
        parse_mode: "HTML",
    })
    ctx.session.step = "shogird"
}

module.exports = {sherik, ish, hodim, ustoz, shogirt}