let bot = require('./bot');
let config = require('./config');
let plugin = require('./Plugins/plugin');
let packageInfo = require('./package.json');

let Time = new Date();
let CurrentTime = Time.getFullYear() + "-" + ("0"+(Time.getMonth()+1)).slice(-2) + "-" + ("0" + Time.getDate()).slice(-2) + "-" + ("0" + Time.getHours()).slice(-2) + "-" + ("0" + Time.getMinutes()).slice(-2) + "-" + ("0" + Time.getSeconds()).slice(-2);

bot.Log.info("开始时间：" + CurrentTime + " - " + config.username + " 版本：" + packageInfo.version);
bot.Log.debug("已选择 Polling")
bot.botctl.start()
bot.Bot.startPolling();

bot.Log.info("柠檬已经在线上啦！");
