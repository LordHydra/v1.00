const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('! Uyarı !', '`oy` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xDF01A5)
        .addField('Bota Oy ver! (Mystic Treasure)', `[Tıkla!](https://discordbots.org/bot/554034194779602944)`, true)
      .addField('Bota Oy ver! (Mystic Music)', `[Tıkla!](https://discordbots.org/bot/554771348061159452)`, true)
    .addField('Destek Sunucusu!', `[Tıkla!](https://discord.gg/C3Kp9m9)`)
    .setFooter('Oy Sistemi', message.guild.ImageURL)
    return message.channel.sendEmbed(sunucubilgi);
    }
};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: true, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: [], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: 0,
}

exports.help = { // Ana ayarları belirtiyoruz.
	komut: 'oy', // Komutu belirtiyoruz.
	description: 'Oy Kullanmak için Siteyi Atar.', // Yardımda gözüken açıklamayı belirtiyoruz.
	usage: 'oy' // Yardımda gözükecek kullanımı belirtiyoruz.
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oy',
  description: 'Oy Kullanmak için Siteyi Atar.',
  usage: 'oy'
}
