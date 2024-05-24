const { Bot, session } = require('grammy');

const config = require('../config');

const compRouter = require('./command/commans')
const { isChecked } = require("./middleware/ia.auth")

const Home = require("./module/oyna1")
const Sherik = require('./module/sherik')
const Ishjoy = require("./module/ish.joy")
const Hodim = require('./module/hodim')
const Shogird = require('./module/shogird')
const Ustoz = require('./module/ustoz');

const bot = new Bot(config.token);

bot.api.setMyCommands([
    {command: "start", description: "START"},
    {command: "help", description: "HELP"},
])


bot.use(session({initial: () =>({step: "hammasi" })}))
bot.use(isChecked)
bot.use(compRouter)

bot.use(Home)
bot.use(Hodim);
bot.use(Sherik)
bot.use(Shogird)
bot.use(Ustoz)
bot.use(Ishjoy)

bot.catch((e) => {
    console.log('e: ', e);
})

bot.start()
