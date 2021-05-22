const dotenv = require("dotenv");
dotenv.config();
// import discord.js and mongodb
const Discord = require("discord.js");
const mongo = require("mongodb");
// set up clients
const client = new Discord.Client();
const MongoClient = mongo.MongoClient;

// set up uri to access mongoDB Atlas
const uri = "mongodb+srv://LogLogs:" + process.env.MDB_PWD + "@msgcluster.8dtqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// console.log("uri: " + uri);

// log into discord bot account
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Guilds / Servers: \n");
  var servers = client.guilds.cache.array();
  for (const server of servers) {
    console.log(server.name + " " + server.id + "\n");
  }
  console.log("Users: \n" + client.users.cache.array());
  console.log("Messages: \n");
  // obtain list of all channels that the bot (client) has access to
  var channels = client.channels.cache.array();
  console.log("Channels: " + channels.length);
  var textchannels = 0;
  var nummessages = 0;
  channels.forEach(channel => {
    // confirm channel is a text channel
    if (channel.isText()) {
      textchannels += 1;
      // pull the 100 most recent messages from first channel in list
      channel.messages.fetch({ limit: 100 }).then(messages => {
        console.log(`Received ${messages.size} messages`);
        nummessages += messages.size;
        //Iterate through the messages here with the variable "messages".
        messages.forEach(message => console.log(message.content))
        // basic messsage data
        console.log("Text channels: " + textchannels);
        console.log("Message amount: " + nummessages);
      })
      // https://stackoverflow.com/questions/55153125/fetch-more-than-100-messages to continue finding messages
    }
  })

  // TODO: connect to MDB client and load data
  // extract data from discord
  /*
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
  */
})

// set prefix
var prefix = "~";



// wait for message
client.on("message", msg => {
  // ignore all bot messages
  if (!msg.author.bot) {
    var curr_msg = msg.content;
    // print msg info
    console.log("message: " + msg.content); // message string
    console.log("words: " + msg.content.split(/\s/)); // array of words split by whitespace
    console.log("author: " + msg.author); // msg.author and msg.author.id return same number string (id)
    console.log("msg ID: " + msg.id); // msg id
    console.log("Timestamp: " + msg.createdTimestamp); // time (milliseconds) since discord epoch (?)
    console.log("Time: " + msg.createdAt); // time in legible form
    console.log("Channel: " + msg.channel.id); // channel id
    console.log("Guild: " + msg.guild.id); // guild (server) id
    // if first char of message = "~"
    if (curr_msg.substring(0, 1) == prefix) {
      // split message String into array separated by whitespace
      var args = msg.content.substring(1).split(/\s/);
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
    if (curr_msg.replace(/\s+/g, '').toLowerCase() == "bruh") {
      msg.channel.send(curr_msg + " moment");
    }
    if (curr_msg.toLowerCase() == "ping") {
      // check server lag?
      msg.reply("Pong!");
    }
    // if message (after removing whitespace and upper case) == "james"
    if (curr_msg.replace(/\s+/g, '').toLowerCase() == "james") {
      msg.channel.send(curr_msg);
    }
  }
})
// console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
