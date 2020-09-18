const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Benita Koruma Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hyper01:751547082560634910> Benita botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Rol Koruma__`,`<a:developer:754707994876313690> \`${prefix}rol-koruma\` Sunucunuzda Rol Silinirse Rölü Tekrar Açar`,true)
.addField(`__Bot Koruma__`,`<a:developer:754707994876313690> \`${prefix}bot-koruma\` Sunucunuza Sizden Başka Birisi Bot Ekleyemez`,true)
.addField(`__Bilgilendirme__`,`<a:hyper01:751547082560634910> \`${prefix}davet\` | Benita'yı Sunucunuza Davet Edersiniz\n<a:hyper01:751547082560634910> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/740310642417860700/754706569928638484/480x146.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["guard","koruma"], 
    permLevel: 0
  };
  exports.help = {
    name: 'koruma'
  }; 
  