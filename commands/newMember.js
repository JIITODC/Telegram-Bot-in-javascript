module.exports = {
    execute(bot) {
        bot.on('new_chat_members', ctx => {
            // username -> ctx.update.message.new_chat_member.username
            if (!ctx.update.message.new_chat_participant.is_bot)
                ctx.reply(`Welcome to the group, @${ctx.update.message.new_chat_member.username}`);
            else
                return;
        })
    }
}