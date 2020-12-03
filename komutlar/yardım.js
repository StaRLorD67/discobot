const Discord = require('discord.js')



exports.run = async (client, msg, args) => {

const embed = new Discord.MessageEmbed()
.setDescription(`Disco Rol Bot Altyapısı | Youtube Bay İlbeycik`)
.addField(`Disco Rolü Ayarlamak İçin,`, `/disco-rol @roletiket`, true)
.addField(`Disco Rolü Başlatmak İçin,`, `/disco`, true)
.setFooter(`Altyapı Bay İlbeycik Tarafından Yapılmıştır ! | Youtube Bay İlbeycik`)
.setThumbnail(msg.author.avatarURL({dynamic: true, format : "png"}))
.setTimestamp()
.setColor(`RANDOM`)
 msg.channel.send(embed)


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
  };
  
  exports.help = {
    name: "yardım"
      };
  