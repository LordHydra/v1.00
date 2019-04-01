const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Sarılacağın birisini etiketlemelisin')
  if (user.id === message.author.id) return message.reply('Biliyorum, yalnızsın ama bunu yapınca ne değişecek?');
    
  if ( message.react('😍')) {
      var gif = [
      'https://media.giphy.com/media/1nI0teHQXnKcE/giphy.gif', 'https://cf.kizlarsoruyor.com/a108057/50f15d91-f409-4dc9-bcb5-490329abdebc.gif','https://cf.kizlarsoruyor.com/a108057/4112a8f0-5cc8-4e99-becc-e25c2cd773c4.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    

    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}>'a sarıldı`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'sarıl',
  usage: 'sarıl'
};