const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `/tkm = Bot ile taş kağıt makas oynarsınız. \n/steamfiyat = İstediğiniz oyunun steam fiyatını gösterir. \n/sarıl = İstediğiniz kişiye sarılırsınız. \n/atatürk = Rastgele ATATÜRK fotoğrafı/gifi atar. \n/fb = Avatarınızın üzerine fenerbahçe görseli koyar. \n/bjk = Avatarınızın üzerine beşiktaş görseli koyar. \n/gs = Avatarınızın üzerine galatasaray görseli koyar. \n/banned = Dene ve Gör! \n/avatarım = Avatarınınızı Gösterir. \n/herkesebendençay = Herkese Çay Alırsınız. \n/koş = Koşarsınız.\n/çayiç = Çay İçersiniz. \n/çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n/çayaşekerat = Çaya Şeker Atarsınız. \n/yumruh-at = Yumruk Atarsınız. \n/yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n/sunucuresmi = BOT Sunucunun Resmini Atar. \n/sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n/kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `/ban = İstediğiniz Kişiyi Sunucudan Banlar. \n/kick  = İstediğiniz Kişiyi Sunucudan Atar. \n/unban = İstediğiniz Kişinin Yasağını Açar. \n/sustur = İstediğiniz Kişiyi Susturur. \n/oylama = Oylama Açar. \n/duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "/yardım = BOT Komutlarını Atar. \n/bilgi = BOT Kendisi Hakkında Bilgi Verir. \n/ping = BOT Gecikme Süresini Söyler. \n/davet = BOT Davet Linkini Atar. \n/istatistik = BOT İstatistiklerini Atar.")
  //.addField("**Yapımcı**", " **⚶ Lørd Hýdrâ 🃏** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
