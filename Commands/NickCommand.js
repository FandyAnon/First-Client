const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'Nick',
	description: 'Changing player nickname',
	aliases: ['nick','setnick'],
	usage: `Nick <player> <newnick>`,
	cooldown: 5,
	execute(client, message, args) {
    
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have the necessary authority");

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("Missing permission on me");
      
        if (!args[0]) return message.channel.send("Please enter a User!")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        
        if (!member) return message.channel.send("Please enter a Username!");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('I Cannot set or change Nickname of this User!')

        if (!args[1]) return message.channel.send("Please enter a Nickname");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Changed Nickname of ${member.displayName} to ${nick}`)
            .setAuthor('Development')
            .setFooter('Development')
        message.channel.send(embed)
        } catch {
            return message.channel.send("Missing Permissions on me")
        }
  }
}
