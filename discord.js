const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async msg => {
  if ((msg.channel.id === '875784839830310933' && msg.content.includes('#op') ) && msg.author.bot) {
    msg.channel.send('<@&835455078625443851>')
  }
})


client.login('ODY4NjU5NDM2NDg5NjcwNzA2.YPy4JA.Jt84C74-pweoofUItC2Yhs1qL-8')
