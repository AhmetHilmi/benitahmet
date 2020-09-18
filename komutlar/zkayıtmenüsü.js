const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Benita Kayıt Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hyper01:751547082560634910> Benita botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Rol__`,`<a:hyper01:751547082560634910> \`${prefix}kayıt-rol\` Kayıt İçin Rol Belirlersiniz`,true)
.addField(`__Kayıt Log__`,`<a:hyper01:751547082560634910> \`${prefix}kayıt-log\` Kayıt Logu Belirlersiniz`,true)
.addField(`__Kayıt Kanal__`,`<a:hyper01:751547082560634910> \`${prefix}kayıt-kanal\` Kayıt İçin Kanal Seçersiniz`,true)
.addField(`__Kayıt Ol__`,`<a:hyper01:751547082560634910> \`${prefix}kayıt\` kayıt isim yaş şeklinde kayıt olun`,true)
.addField(`__Bilgilendirme__`,`<a:hyper01:751547082560634910> \`${prefix}davet\` | Benita'yı Sunucunuza Davet Edersiniz\n<a:hyper01:751547082560634910> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["kayıt"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımkayıt'
  }; 
  