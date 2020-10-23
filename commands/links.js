module.exports = {
    execute(bot) {
        bot.command('links', ctx => {
            const opts = {
                "reply_markup": {
                    "inline_keyboard": [[
                        { "text": "Website", "url": "https://jiitodc.netlify.app" },
                    ],
                    [
                        { "text": "Github", "url": "https://github.com/JIITODC/" },
                    ],
                    [
                        { "text": "Offtopic Telegram", "url": "https://t.me/jiitodc_offtopic" }
                    ],
                    [
                        { "text": "Discord", "url": "https://discord.gg/eFrP5Z" },
                        { "text": "Twitter", "url": "https://twitter.com/jiitod" }
                    ],
                    [
                        { "text": "LinkedIn", "url": "https://www.linkedin.com/company/jodc/" },
                        { "text": "Facebook", "url": "https://www.facebook.com/jiitodc/" }
                    ]
                    ]
                }
            }
            ctx.telegram.sendMessage(ctx.chat.id, "Find JODC on:", opts);
        })
    }
}