let bot = require('../bot');
//let nlp = require('./nlp');
let config = require('../config');
let control = require('../core');

let msgctl = {
    core(ctx) {
        // Port CTX to context as a variable
        text.core(ctx);
        return;
    }
}

/*
let nlpProcessor = {
    command(ctx) {
        let text = control.command.commandCheck(ctx);
        ctx.reply(this.core(text));
    },
    core(text) {
        let tagging = nlp.tokenizer(nlp.receiver(text));
        return JSON.stringify(tagging);
    }
}
*/

let text = {
    core(ctx) {

        let dislikeall = /((?!不)(.*?)(?:讨厌)(((?:Neko)|(?: Neko))|(?:羽毛)|(?:柠檬)))|((.*?)(?:讨厌)\w(((?:Neko)|(?: Neko))|(?:羽毛)|(?:柠檬)))|((.*?)((?:不)((.*?)(?:喜欢)|(.*?)(?:讨厌)))\w((?:Neko)|(?:羽毛)))|(.*?)((?:不)(.*?)(?:喜欢))/gi;
        let lovefeather = /(?:喜欢羽毛)|(?:爱羽毛)/g;
        let loveneko = /^(?!不)(?:喜欢 Neko)|(?:喜欢Neko)/gi;
        let sadmeow = /(?:喵)(?:\.\.\.)+/g;
        let lemoncute = /(?:柠檬)(.*?)(?:可爱)/g;
        let lemonnotcute = /(.*?)(不)(.*?)(?:柠檬)|(?:柠檬)(.*?)(不)(.*?)/g;
        let lemonlemonle = /(柠檬柠檬柠)|(柠檬柠)/g;
        let lemonletsplay = /((?:柠檬)|(柠檬酱))(?:来玩)/g;
        let hugneeded = /(?:要抱)((抱)|(.*))/gi;
        let tiredforthis = /(^(.*)(?:累))/gi;
        let meowmeow = /(喵~)/gi
        let dumbningmeng = /(柠檬)(()|(是))((?:笨蛋)|(?:讨厌)|(?:大笨蛋))/gi
        let hugningmeng = /((?:抱抱)|(?:摸摸))(柠檬)/gi
        let thxningmeng = /谢谢((柠檬)|(柠檬酱)|(Ningmeng)|(ningmeng)|(Lemon))/gi

        // Greetings

        let scmorning = /((.*)|(?:大家))((?:早安安)|(?:早安)|(?:早上好))/gi;
        let lemonmorning = /((柠檬酱)|(?:柠檬))((?:早安安)|(?:早安)|(?:早上好)|(?:早))/g;
        let enmorning = /((?:Good Morning))(\w|((.*)(?:.*)))/gi;

        let scafternoon = /((.*)|(?:大家))((?:午安安)|(?:午安)|(?:下午好)|(?:中午好))/gi;
        let lemonafternoon = /((柠檬酱)|(?:柠檬))((?:午安)|(?:午安安)|(?:下午好))/g;
        let enafternoon = /((?:Good Afternoon))(\w|((.*)(?:.*)))/gi;

        let scnight = /((.*)|(?:大家))((?:晚安安)|(?:晚安))/gi;
        let lemonnight = /((柠檬酱)|(?:柠檬))((?:晚安)|(?:晚安安))/g;
        let ennight = /((?:Good Night))(\w|((.*)(?:.*)))/gi;

        let scevening = /((.*)|(?:大家))((?:晚上好)|(?:晚好))/gi;
        let lemonevening = /((柠檬酱)|(?:柠檬))((?:晚上好)|(?:晚好))/gi;
        let enevening = /((?:Good Evening))(\w|((.*)(?:.*)))/gi;

        this.reply(ctx, dislikeall, "喵...怎么这样...")
        this.reply(ctx, lovefeather, '好耶 /');
        this.reply(ctx, loveneko, "Neko 知道的话会超开心的！")
        this.reply(ctx, sadmeow, "喵...怎么了吗...");
        this.reply(ctx, /(?:咕噜)/g, "咕噜咕噜咕噜");
        this.reply(ctx, lemonnotcute, "喵...柠檬做错惹什么嘛...（哭哭");
        this.reply(ctx, lemoncute, "啊呜啊呜(捂脸)");
        this.reply(ctx, lemonlemonle, "咕噜咕噜~ 要做什么啦！");
        this.reply(ctx, lemonletsplay, "(竖起耳朵) 柠檬也想玩呢，可是 Neko 说要继续研究新的东西什么的...弄完这些工作才能玩呢。抱歉啦~");
        this.reply(ctx, hugneeded, "啊呜啊呜，抱紧紧...（顺毛）");
        this.reply(ctx, tiredforthis, "揉揉...实在太累的话就休息一下呢喵...");
        this.reply(ctx, meowmeow, "喵~");
        this.reply(ctx, dumbningmeng, "呜...柠檬对不起呢...有什么对不起你的地方吗......而且...明明是主人的错嘛！")
        this.reply(ctx, hugningmeng, "喵...扑过去抱住 >_<");
        this.reply(ctx, thxningmeng, "不用谢呢，这是我应该做的")

        this.reply(ctx, lemonmorning, "喵~早安");
        this.reply(ctx, scmorning, "早安喔");
        this.reply(ctx, enmorning, "Morning!");

        this.reply(ctx, lemonafternoon, "咕噜咕噜，午安安，有闲暇时间的话记得休息放松一下呢~");
        this.reply(ctx, scafternoon, "已经过去大半天了呢，午安喵");
        this.reply(ctx, enafternoon, "Good afternoon! Finishing up with all your work?");

        this.reply(ctx, lemonnight, "嗯喵，晚安。祝你做个好梦呢~");
        this.reply(ctx, scnight, "晚