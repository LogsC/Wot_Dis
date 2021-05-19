// import discord.js and mongodb
const Discord = require("discord.js");
// const mongo = require("mongodb");

// set up clients
const client = new Discord.Client();
// const MongoClient = mongo.MongoClient;

// set up uri to access mongoDB Atlas
// const uri = "mongodb+srv://LogLogs:" + process.env.MDB_PWD + "@msgcluster.8dtqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// log into discord bot account
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

// set prefix
var prefix = "~";

// TODO: connect to MDB client and load data
// extract data from discord

// wait for message
client.on("message", msg => {
  var curr_msg = msg.content;
  // print msg info
  console.log("author: " + msg.author); // msg.author and msg.author.id return same number string (id)
  console.log("msg ID: " + msg.id); // msg id
  console.log("Timestamp: " + msg.createdTimestamp); // time (milliseconds) since 1/1/1970 00:00 UTC
  console.log("Time: " + msg.createdAt); // time in legible form
  console.log("Channel: " + msg.channel.id); // channel id
  console.log("Guild: " + msg.guild.id); // guild (server) id
  // if first char of message = "~"
  if (curr_msg.substring(0, 1) == prefix) {
    // split message String into array separated by spaces " "
    var args = msg.content.substring(1).split(" ");
    // set the command to be the first word - "~help" -> "help"
    var cmd = args[0];
    // remove cmd from args list
    args = args.splice(1);
    // process the command argument
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
  // omegalul
  if (curr_msg.toLowerCase() == "bruh") {
    msg.channel.send("bruh moment");
  }
  if (curr_msg.toLowerCase() == "ping") {
    // check server lag?
    msg.reply("Pong!");
  }
})

client.login(process.env.TOKEN)

// MongoDB client connection reference (replace <password> with LogLogs password):
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://LogLogs:<password>@msgcluster.8dtqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */
