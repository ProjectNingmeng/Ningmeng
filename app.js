// Dependencies

let got = require('got');

// Local Files

let bot = require('./bot');
let config = require('./config');

bot.botctl.start();

if(config.mode === "polling") {
    bot.Log.debug("已选择 Polling")
    bot.Bot.startPolling();
}

/*
else if(config.mode === "webhook") {
    // Webhook

    bot.Log("已选择 Webhook")
    const Koa = require('koa');
    const koaBody = require('koa-body');

    // Local Files

    let bot = require('./bot');
    let config = require('./config');
    let watchdog = require('./Plugins/watchdog');

    let webhookUrl = config.webhook.url;
    let webhookPath = config.webhook.path;
    let webhookPort = config.webhook.port;

    const app = new Koa();

    bot.botctl.start();

    bot.Bot.telegram.setWebhook(webhookUrl + webhookPath);

    app.use(koaBody());
    app.use((ctx, next) => ctx.method === 'POST' || ctx.url === webhookPath
        ? bot.Bot.handleUpdate(ctx.request.body, ctx.response)
        : next()
    )

    app.use(async (ctx,next) => {
        if(ctx.method === 'GET' && ctx.url === '/watchDog') {
            ctx.statusCode = 200
            await watchdog.getFullAPI(config.plugins.watchdog.cachet.site + "/api/v1/components");
            //await Promise.all(watchdog.getFullAPI).catch(bot.Log.fatal.err);
        }
        await next()
    })

        app.listen(webhookPort);
        bot.Log.info("开始时间：" + CurrentTime + " - " + botUsername + " 版本：" + packageInfo.version);
        bot.log.info("当前 Webhook 设定：" + config.webhook.url + config.webhook.path + " 在端口 " + config.webhook.port);
}

else {
    console.log("Config file invalid");
}
*/
bot.Log.info("柠檬现在已经在线上啦！");