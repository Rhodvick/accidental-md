"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "galaxy", reaction: "🌌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗛𝗘𝗟𝗟𝗢 👋  \n\n ' + "𝗔𝗠 *SAVAGE MD* 𝗕𝗬 *MBUVI TECH* 𝗔𝗡𝗗 𝗦𝗧𝗜𝗟𝗟 𝗘𝗫𝗣𝗟𝗢𝗥𝗜𝗡𝗚 𝗧𝗛𝗘 𝗚𝗔𝗟𝗔𝗫𝗬";
    let d = 'The galaxy is so favourable, wish you could be here';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *FLASH-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *France King*'
      let varmess=z+d
      var img='https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
