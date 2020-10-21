module.exports = {
    execute(bot) {
        bot.command('help', async (ctx) => {
            const commands = await ctx.getMyCommands();
            let value = "Here's the list of commands i know:\n";
            commands.forEach(cmd => {
                value += `/${cmd.command} - ${cmd.description}\n`;
            })

            ctx.reply(value);
        })
    }
}