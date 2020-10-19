module.exports = {
    execute(bot) {
        bot.command('hello', ctx => {
            ctx.reply("Hi there!");
        });
    }
}