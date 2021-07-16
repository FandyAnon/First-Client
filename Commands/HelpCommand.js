const { prefix } = require('../Database.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'Help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands', 'help'],
	usage: `help [Optional Command Name]`,
	cooldown: 5,
	async execute(client, message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
     let helpEmbed1 = new MessageEmbed()
		.setTitle(client.user.username)
    
    .addField(`Commands State`,"If you want to get information about our commands, you can try to find with `Help_CommandName`. For example `Help User`")
    .addFields(
                {
                    name: "General",
                    value: "`Avatar` `Embed` `Ping`",
                    inline: true
                },
                {
                    name: "Development",
                    value: "`Nick` `Purge`",
                    inline: true
                })

    .setFooter("Development")
    
    message.channel.send(helpEmbed1)
		}
if(!args[0]){
  return false;
} 
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`• **Name:** ${command.name}`);

		if (command.aliases) data.push(`• **Aliases:** ${command.aliases.join(', ')}`);
    
    
		if (command.description) data.push(`• **Description:** ${command.description}`);
    
    
		if (command.usage) data.push(`• **Usage:** ${command.name} ${command.usage}`);
  
 		data.push(`• **Cooldown:** ${command.cooldown || 3} second(s)`);
    let kid = new MessageEmbed()
    .setTitle(`About ${command.name}`)
    .setColor('GREEN')
    .setDescription(data, { split: true })
    const msg = await message.channel.send(kid)
    msg.react("✅")
	},
};
