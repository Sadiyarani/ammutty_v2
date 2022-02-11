const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/3H6Opmg.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `𝗔𝗠𝗠𝗨𝗧𝗧𝗬 𝗕𝗢𝗧
Ｔ

*bot making video* : _https://youtu.be/MPoRRTkjuW0_

*owner id instagram* :https://instagram.com/SHIBI__ZX?utm_medium=copy_link.

*github* : _https://github.com/SHIBI-SER/ammutty_v2

■□■□■□■□■□■□■□■□■□■□
    𝗔𝗠𝗠𝗨𝗧𝗧𝗬 𝗕𝗢𝗧    
  ▣▣ created by shibi ▣▣

`}) 

}));
