const fs = require("fs");
const Discord = require("discord.js");
const { token } = require("../config.json");
const client = new Discord.Client();
const regex = /(\bi[\'\s]a?m\s)/i;

client.once("ready", () => {
  console.log("Bot ready");
});

client.on("message", (message) => {
  if (!regex.test(message.content) || message.author.bot) return;
  console.log(`Original message: ${message.content}`);
  const splitMessage = message.content.split(regex);
  const i = splitMessage.findIndex((element) => regex.test(element));
  if (i != -1 && i + 1 < splitMessage.length) {
    const target = splitMessage.slice(i + 1).join("");
    const greeting = `Hi ${target}, I'm Dadbot!`;
    message.channel.send(greeting);
  } else {
    console.log(`Failed to parse message: ${message.content}`);
  }
});

client.login(token);
