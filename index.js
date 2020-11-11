const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hello, I'm the JODC bot written in JS."));

// load commands from 'commands' directory
const Commands = fs.readdirSync('./commands');
for (const file of Commands) {
    const command = require(`./commands/${file}`);
    command.execute(bot);
}

// unknown command handler
bot.on('text', ctx => {
    if (ctx.update.message.text.startsWith('/')) {
        ctx.reply("Sorry, I don't know that command.");
    }
    else return;
})

// error handling
bot.catch((err, ctx) => {
    console.log('Error Occured', err);
});


bot.launch();