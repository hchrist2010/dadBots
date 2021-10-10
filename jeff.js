const Discord = require("discord.js");
const config = require('./jeffConfig.json');
const api = require('./api');
const {
  getJoke
} = require('./models/joke');

const client = new Discord.Client();
exports.client = client;

const generalVoiceChannel = 821792426481942533;

client.on("ready", () => {
    const Channel = client.channels.cache.get("821792426481942532");
    if (!Channel) return console.log("Invalid channel");
    background(Channel)
});

const prefix1 = "dad";
const prefix2 = "joke";

const maxTime = 60 * 1000 * 60 * 4;

async function background(Channel){
  var time;
  while(1){
    time = getRandomInt(60 * 1000 * 60 * 2);
    await sleep(maxTime - time);
    Channel.send("Are ya winnin, son?");
  }
}

client.on("message", async function(message){
  if (!message.content.toLowerCase().includes(prefix1) && !message.content.toLowerCase().includes(prefix2)) return;
  if (message.author.bot) return;
  const reply = await getJoke();
  message.reply(reply.setup);
  await sleep(3000);
  message.reply(reply.punchline);
});

client.login(config.BOT_TOKEN);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
