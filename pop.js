const tg = Telegram.WebApp;
tg.ready();

document.getElementById('getUser').addEventListener('click', () => {
    const user = tg.initDataUnsafe.user || {};
    document.getElementById('requestUser').innerText = JSON.stringify(user, null, 2);
    navigator.clipboard.writeText(JSON.stringify(user)).then(() => {
        console.log("User copied to clipboard");
    });
});

document.getElementById('getQuery').addEventListener('click', () => {
    const query = tg.initDataUnsafe.query_id || '';
    document.getElementById('requestQuery').innerText = query;
    navigator.clipboard.writeText(query).then(() => {
        console.log("Query_ID copied to clipboard");
    });
});

document.getElementById('sendToBot').addEventListener('click', () => {
    const data = {
        user: tg.initDataUnsafe.user,
        query_id: tg.initDataUnsafe.query_id
    };
    tg.sendData(JSON.stringify(data)); // sends data to bot
    alert("Data sent to Bot ✅");
});
