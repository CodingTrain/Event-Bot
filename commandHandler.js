module.exports = {
    name:"commandhandler",
    execute(msg){
    
        const client = msg.client;

        if(msg.author.bot)return;
        if(!msg.content.startsWith("."))return;

        const messageNoPrefix = msg.content.slice(1);
        const tokens = messageNoPrefix.split(/ +/);
        const commandName = tokens[0];

        if(!client.commands.has(commandName))return;

        const command = client.commands.get(commandName);
        command.execute(msg);

    
}
}