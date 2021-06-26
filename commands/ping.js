module.exports = {
    name: "ping",
    execute(msg){
        const client = msg.client
        const commands = client.commands
        msg.channel.send("Pong " + msg.author.username)
        const attachments = msg.attachments;
        if(attachments.size == 0)return;
        msg.channel.send("That's a nice picture!")
        
    }
}