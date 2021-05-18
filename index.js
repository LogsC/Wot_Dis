const Discord = require("discord.js");
// const mongo = require("mongodb");

const client = new Discord.Client();
// const MongoClient = mongo.MongoClient;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

var prefix = "~";

client.on("message", msg => {
  var curr_msg = msg.content;
  if (curr_msg.substring(0, 1) == prefix) {
    var args = msg.content.substring(1).split(" ");
    var cmd = args[0];
    // console.log(args)
    // console.log(cmd)
    args = args.splice(1);
    switch(cmd) {
      case "help":
        msg.channel.send("Here are my commands!\n" +
          "~wotlabs <username>");
        break;
      case "wotlabs":
        msg.channel.send("https://wotlabs.net/na/player/" + args[0]);
        break;
      default:
        // do not want to spam if no command called
    }
  }
  if (curr_msg.toLowerCase() == "bruh") {
    msg.channel.send("bruh moment");
  }
  if (curr_msg.toLowerCase() == "ping") {
    // check server lag?
    msg.reply("Pong!");
  }
})

client.login(process.env.TOKEN)