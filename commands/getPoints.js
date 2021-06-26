module.exports = {
    name:"points",
    execute(msg){
        const result = msg.client.defaultEmbed();


        result.setTitle("Points")
        .addFields({name:'Your balance', value:`You currently have 0 points.`});
        msg.channel.send(result);
    }
}