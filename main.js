const discord = require('discord.js');
const bot = new discord.Client();
const { annonfooter, annonlogo, prefix, token } = process.env;
require("./server.js")
// -- SQL connection n stuff -- \\
const mysql = require('mysql');

// -- Main Functions -- \\
function GenerateFirstEncryption(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}
function GenerateSecondEncryption() {
  const result=(Math.random(160000000000,1000000000000)).toString(36)
  const result2=(Math.random(160000000000,1000000000000)).toString(36)
  let random = Math.random(1234 * 34532151451)
  const result3 = result+result2
  let lastresult = result3.replace(".", random)
  lastresult = lastresult.replace(".", random)
  let verylastResult = result+lastresult
  return verylastResult
}
function GenerateThirdEncryption() {
  const {SHA224,SHA512,SHA384,SHA256} = require("sha2");
  const SecondEncryptionResult = GenerateSecondEncryption(50)
  const FirstResult = SHA224(SecondEncryptionResult)
  const SecondResult = SHA512(FirstResult)
  const ThirdResult = SHA384(SecondResult)
  const FourthResult = SHA256(ThirdResult)
  const RandomAddition1 =(Math.random(160000000000,1000000000000)).toString(36)
  const RandomAddition2 =(Math.random(160000000000,1000000000000)).toString(36)
  const GTEResult = RandomAddition1+FourthResult+RandomAddition2

  return GTEResult;
  
}
const GTEToString = GenerateSecondEncryption(10).toString("hex");
const GSEToString = GenerateThirdEncryption(10).toString("hex");
const GTEandGSE = GTEToString+GSEToString

function formatnum(i) {
  let _i = i.replace("000","")
  let _i_i = _i.replace(".","")
  let _i_i_i = _i_i.replace(".","")
  let _i_i_i_i = _i_i_i.replace(0,"")
  let _i_i_i_i_i = _i_i_i_i.replace(/(?!\w)[\x00-\xC0]/g, '')
  return _i_i_i_i_i
}
//=-=-=-=-=-=-=-=-=-=-=-=-\\
bot.on("message", message => {
  let msg = message.content.split(/ +/g)
  let cmd = msg[0]
  cmd = cmd.replace(prefix,"")
  let args = msg.slice(1);
  // --- \\
  if(cmd==="genkey") {
    if(!message.guild) {
    var User = formatnum(message.author.tag.substring(0,10))
    let format = User+"_"+GTEandGSE
    let embed = new discord.MessageEmbed()
    .setTitle("Generated Key")
    .setColor("RANDOM")
    .addField("Key: ","```\n\n\ngetgenv().Key = "+`"`+format+`"`+"```")
    .setFooter(annonfooter,annonlogo) 
    return message.reply(embed)
    }
    else
    {
    var User = formatnum(message.author.tag.substring(0,10))
    let format = User+"_"+GenerateThirdEncryption(50)+GenerateSecondEncryption(15)
    let embed = new discord.MessageEmbed()
    .setTitle("Generated Key")
    .setColor("RANDOM")
    .addField("Key: ","```\n\n\ngetgenv().Key = "+`"`+format+`"`+"```")
    .setFooter(annonfooter,annonlogo) 
    return message.member.send(embed)
    }
  }
  // --- \\
  if(cmd==="giftkey") {
    
  }
  if(cmd==="test") {
    const result = Math.random(323232323323123453535,9438238473847234).toString(36)
    message.reply("Result: "+result)
  }
});


const server = require('./server.js');
bot.login(token)
