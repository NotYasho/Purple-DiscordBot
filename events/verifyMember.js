module.exports = {
	name    : 'messageReactionAdd',
	async execute(reaction, user) {
		const message = reaction.message;
		const verifyChannel = message.guild.channels.cache.find((c) => c.name.includes('rules'));
		const member = message.guild.members.cache.get(user.id);

		if (member.user.bot) return;

		const verify = message.guild.roles.cache.find((role) => role.name === 'Member');

		if (reaction.emoji.name === '✅' && message.channel.id === verifyChannel.id) {
			member.roles.add(verify).catch(console.error);
		}
	}
};
