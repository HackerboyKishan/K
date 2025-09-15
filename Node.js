import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('<YOUR_BOT_TOKEN>', { polling: true });

bot.on('message', (msg) => {
    if (msg.web_app_data) {
        const data = JSON.parse(msg.web_app_data.data);
        console.log("User Data:", data.user);
        console.log("Query_ID:", data.query_id);
        bot.sendMessage(msg.chat.id, "✅ Received your User & Query_ID data");
    }
});
