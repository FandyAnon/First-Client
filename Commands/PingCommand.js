const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");

module.exports = {
	name: 'Ping',
	description: 'Network info',
	aliases: ['ping','peng','pong','pung'],
	cooldown: 2,
	execute(client, message, args) {
  
  let start = Date.now();
    let diff = (Date.now() - start).toLocaleString();
    let API = client.ws.ping.toFixed();
    let Matcha = new Discord.MessageEmbed()
      .setAuthor("Network", client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setFooter(`Development`)
      .addField("Latency", `${diff}ms`, true)  
      .addField("API", `${API}ms`, true)
      .setTimestamp()
      
       message.channel.send(Matcha);
     }
 }
