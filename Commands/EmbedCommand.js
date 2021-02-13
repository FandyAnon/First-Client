const Discord = require('discord.js')

module.exports = {
	name: 'Embed',
	description: 'Embed on message',
	aliases: ['embed','embedsay','embedtext'],
	usage: `Embed <text>`,
	cooldown: 5,
	async execute(client, message, args) { 


let Embedtool = new Discord.MessageEmbed()
        
        .setDescription(`${message.author}, Please enter a word or message to embed.`)
        .setTimestamp();

    var text = args.join(" ");
    if (!text) return message.channel.send(Embedtool);

    let postMsg = await message.channel.send('**Please wait a moment...**');
    let embedsay = new Discord.MessageEmbed()
        .setDescription(`${text}`);
        message.channel.send(embedsay).then(() => { postMsg.delete();});
        message.delete({ timeout: 200 });
  }
}
