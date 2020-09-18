const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:hyper01:751547082560634910> **Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=754356802644344934&permissions=8&scope=bot) \n <a:hyper01:751547082560634910> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/JaWvwsg) \n <a:hyper01:751547082560634910> **Web Sitemizi Ziyaret etmek İçin** [YAKINDA](https://discord.gg/JaWvwsg)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};