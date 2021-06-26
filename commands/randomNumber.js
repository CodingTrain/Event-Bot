module.exports = {
    name:"random",
    arguments:2,
    execute(msg){
        const tokens = msg.tokens;
        const numberRegex = new RegExp(/^\d+$/)
        let success = true;

        for(token of tokens){
            if(!numberRegex.test(token))success = false;
        }
        
        const randomNumber = parseInt(tokens[0]) + Math.floor(Math.random()*(tokens[1]-tokens[0]));

        const resultEmbed = msg.client.defaultEmbed(success);
        resultEmbed.setTitle("Random Number")
        resultEmbed.addFields({name:"I rolled digital dice for you", value:success?`The number I selected was ${randomNumber}`:"Your inputs were incorrect, please try again."})
        msg.channel.send(resultEmbed);
    }
}

