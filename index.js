console.log("Beep boop!")

const Discord = require("discord.js");
const fs = require('fs');
const commandHandler = require('./commandHandler.js');


require("dotenv").config();

const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready', readied);

client.commands = new Discord.Collection();
client.defaultEmbed = require("./defaultEmbed.js");

const folderName = "commands";
const folder = fs.readdirSync(folderName).filter(file => file.endsWith(".js"));

for(const file of folder){
    const command = require(`./${folderName}/${file}`);
    client.commands.set(command.name, command)
}

client.on('message', commandHandler.execute)



function readied(){
    console.log("READYYYY")
}
