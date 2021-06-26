console.log("Beep boop!")

const { ifError } = require("assert");
const Discord = require("discord.js");
const fs = require('fs');

require("dotenv").config();

const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready', readied);
client.commands = new Discord.Collection();
const folderName = "commands";
const folder = fs.readdirSync(folderName).filter(file => file.endsWith(".js"));

for(const file of folder){
    const command = require(`./${folderName}/${file}`);
    client.commands.set(command.name, command)
}



function readied(){
    console.log("READYYYY")
}

client.on('message', commandHandler)


function commandHandler(msg){
    
    if(msg.author.bot)return;
    if(!msg.content.startsWith("."))return;

    const messageNoPrefix = msg.content.slice(1);
    const tokens = messageNoPrefix.split(/ +/);
    const commandName = tokens[0];

    if(!client.commands.has(commandName))return;

    const command = client.commands.get(commandName);
    command.execute(msg);

    
}

