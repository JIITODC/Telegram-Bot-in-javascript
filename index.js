const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hello, I'm the JODC bot written in JS."));
bot.help((ctx) => ctx.reply('NOT IMPLEMENTED'));

const Commands = fs.readdirSync('./commands');
for (const file of Commands) {
    const command = require(`./commands/${file}`);
    command.execute(bot);
}


bot.launch();