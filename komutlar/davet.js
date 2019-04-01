const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('! Uyarı !', '`davet` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xDF01A5)
        .addField('Botu Davet Et!', `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=551132356405362703&scope=bot&permissions=2146958847)`, true)
        .addField('Destek Sunucusu!', `[Tıkla!](https://discord.gg/C3Kp9m9)`)
    .setFooter('Davet Sistemi', message.guild.ImageURL)
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
	komut: 'davet', // Komutu belirtiyoruz.
	description: 'Bu bir örnek komuttur.', // Yardımda gözüken açıklamayı belirtiyoruz.
	usage: 'özel' // Yardımda gözükecek kullanımı belirtiyoruz.
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet',
  description: 'Sunucuna beni davet etmek için link!',
  usage: 'davet'
}
