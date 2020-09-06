const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const { Client, Util, MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');
const moment = require('moment');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
require("dotenv").config();
require("./server.js");


// this event will only trigger one time after logging in
const PREFIX = process.env.PREFIX ;
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();


const activities_list = [
    "OFFICIAL BOT Night Cafe", 
    "Created by foxie",
    "Jaga Kesehatan", 
    "command nc!help",
    "PODCAST RABU 21.00 WIB"
  //  "Waiting for next event"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index] , {type : 'WATCHING'}); // sets bot's activities to one of the phrases in the arraylist.
    }, 7000); // Runs this every 10 seconds.
});

client.on('ready', () => {
client.user.setPresence({status: 'idle' })
  .then(console.log)
  .catch(console.error);
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.id === '719212693860384880');
  // Do nothing if the channel wasn't found on this server
  //if (!channel) return;
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome')
        .setDescription(`Hello new member!!!,
Welcome to __**_Night Cafe_**__  ${member}`)
        .setThumbnail('https://media.discordapp.net/attachments/721013672431845489/722923521164050462/22-225874_coffee-logo-png-vector-cafe.png')
        .setFooter('Owner Coffeelake');

  // Send the message, mentioning the member
  channel.send(exampleEmbed)

 });



 




client.on('message', message => {

  //if (message.author.bot) return;
    //if (!message.content.startsWith(prefix)) return;

    if (message.content === PREFIX + 'ping') {
        message.channel.send('pong? `' + `${Date.now() - message.createdTimestamp}` + ' ms`');

    }

    if (message.content === 'Woy') {
        message.channel.send('kalem gan');

    }

    if (message.content === 'woy') {
        message.channel.send('kalem gan');

    }
    if (message.content === 'nana') {
        message.channel.send('nana punya Foxie ');

    }
     if (message.content === 'NaNa') {
        message.channel.send('nana punya Foxie ');

    }
     if (message.content === 'NANa') {
        message.channel.send('nana punya Foxie ');

    }
 if (message.content === 'NAna') {
        message.channel.send('nana punya Foxie ');

    }
     if (message.content === 'Nana') {
        message.channel.send('nana punya Foxie ');

    }
     if (message.content === 'NANA') {
        message.channel.send('nana punya Foxie ');

    }
    if (message.content === 'nc!cek') {
       message.channel.send("@here Found one!! ");

    }




//if (message.content === 'sana') {
  //      message.channel.send(' https://tenor.com/view/sana-twice-kitty-dance-kpop-gif-17314571 ');



    if (message.content === 'mama') {
        message.channel.send('uuuuuuuuuuuuuuuuuuuu');

    }

      if (message.content === 'annyeong') {
        message.channel.send('annyeongaseo :) ');

    }

    if (message.content === 'foxie') {
        message.channel.send('poksi punya nana');

    }
     if (message.content === 'poksi') {
        message.channel.send('poksi punya nana');

    }

    if (message.content === 'Poksi') {
        message.channel.send('poksi punya nana');

    }
    if (message.content === 'Foxie') {
        message.channel.send('poksi punya nana');

    }
if (message.content === '+bantu') {
       message.author.send(" bisa donasi kesini kak makasih :))  kalo mau donate pulsa chat Foxie ya :)) https://cdn.discordapp.com/attachments/721950616397545493/731030442530177074/Screenshot_2020-07-10-13-13-39-28.jpg , https://cdn.discordapp.com/attachments/721950616397545493/731030110601347212/Screenshot_2020-07-10-13-12-14-66.jpg ");

    }
  


  });

client.on('message', msg => {
  if (msg.content === 'hai') {
    msg.reply('Hai juga sayang');
  }
});

client.on('message', msg => {
  if (msg.content === 'callme') {
    msg.send('Hai');
  }

});






client.on('message', message => {
  // If the message is "what is my avatar"
  if(message.content.startsWith('nc!myavatar')){
    
        
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
            message.channel.send(emb)
        }
}


});


//test bot
client.on('message', message=> {
   if (message.content === 'cek1'){
       const channel = message.guild.channels.cache.find(ch => ch.id === '730736365234421830');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Halo @ everyone, Jangan lupa hadir acara podcast kita nanti ya!!!, Jam 9 Wib ^^`);
};
    });

//bot event remin
client.on('message', message=> {
   if (message.content === 'nc!remin'){
       const channel = message.guild.channels.cache.find(ch => ch.id === '719212690714787920');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Halo @everyone, Jangan lupa hadir acara podcast kita nanti ya!!!, Jam 9 Wib ^^`);

 
};
    });



client.on('message', message => {
  if (message.content.startsWith("nc$say")) {
      // Get the channel mention
      if (message.mentions.channels.size == 0) {
          message.reply("please mention a channel first.");
      }
      else {
          let targetChannel = message.mentions.channels.first();
          // Get the message to print

          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          targetChannel.send(saytext);
          message.delete();
      }
};

});

client.on('message', message => {
  if(message.content.startsWith('nc!userinfo')){
     let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;
    
        
       if(message.mentions.users.size){
            let member = message.mentions.members.first()
        if(member){
            const emb=new Discord.MessageEmbed()
            .setColor('#ff9248')
            .setImage(member.user.displayAvatarURL())
            .setTitle(member.user.username)
            .addField("Member ID", member.id)
            .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
            .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
            .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
            .addField("Status", status)
            message.channel.send(emb)

            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed()
            .setColor('#ff9248')
            .setImage(message.author.displayAvatarURL())
            .setTitle(message.author.username)
            .addField("Member ID", member.id)
            .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
            .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
            .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
            .addField("Status", status)
            message.channel.send(emb)
        }
}
});


//help
client.on('message', message => {
  if(message.content.startsWith('nc!help')){

const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Help Command')
  .setDescription('You can use command,```nc!ping, nc!userinfo, nc!myavatar``` ')
  .setFooter('Bot Created By Foxie', 'https://media.discordapp.net/attachments/721013672431845489/722923521164050462/22-225874_coffee-logo-png-vector-cafe.png');

message.reply(exampleEmbed);


};
});


client.on('message', message => {
  if(message.content.startsWith('nc!serverinfo')){

    const svembed = new Discord.MessageEmbed()
    .setTitle(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .addField(`Owner` , message.guild.owner.user)
    .addField('ID' , message.guild.id)
    .addField(`Member`, message.guild.memberCount)
    .addField(`Total Channel` ,message.guild.channelCount ,)
    .addField("Roles",`This server has ${message.guild.roles.size} roles`,  inline=true)
    .addField(`Server Created`,moment.utc(message.guild.createdAt).format("dddd , MMMM Do, YYYY "),true)

    return message.channel.send(svembed);
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('nc!zxkick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user) ;
      // If the member is in the guild
      if (member) {
        /*
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }

});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

   if (message.content.startsWith("nc!kick")) {

    if (!message.member.roles.cache.some(roles=> roles.name === 'Admin','Owner'))
        return;
    // Easy way to get member object though mentions.
    var member = message.mentions.members.first();
    // Kick
    member.kick().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
        // Failmessage
        message.channel.send("Kamu gabisa nendang dia");
    });
}
});


client.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "%loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("Mina desu")
            .catch(console.error); // add error handling here
        }, 4 * 60 * 60 * 100); 
    }
});


client.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "%loop1") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("Mina")
            .catch(console.error); // add error handling here
        }, 480 * 60 * 1000); 
    }
});



//music



client.on("message", async (message) => { // eslint-disable-line
    if (message.author.client) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.split(" ");
    const searchString = args.slice(1).join(" ");
    const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    const serverQueue = queue.get(message.guild.id);

    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(PREFIX.length);

    if (command === "help" || command === "cmd") {
        const helpembed = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor(client.user.tag, cient.user.displayAvatarURL())
            .setDescription(`
__**Command list**__
> \`play\` > **\`play [title/url]\`**
> \`search\` > **\`search [title]\`**
> \`skip\`, \`stop\`,  \`pause\`, \`resume\`
> \`nowplaying\`, \`queue\`, \`volume\``)
            .setFooter("©️Night Cafe", "https://api.zhycorp.xyz/assets/images/icon.jpg");
        message.channel.send(helpembed);
    }
    if (command === "nc!play" || command === "nc!p") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({embed: {color: "RED", description: "I'm sorry, but you need to be in a voice channel to play a music!"}});
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({embed: {color: "RED", description: "Sorry, but I need a **`CONNECT`** permission to proceed!"}});
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({embed: {color: "RED", description: "Sorry, but I need a **`SPEAK`** permission to proceed!"}});
        }
        if (!url || !searchString) return message.channel.send({embed: {color: "RED", description: "Please input link/title to play music"}});
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({embed: {
                    color: "GREEN",
                    description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
            }});
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var video = await youtube.getVideoByID(videos[0].id);
                    if (!video) return message.channel.send({embed: {color: "RED", description: "🆘  **|**  I could not obtain any search results"}});
                } catch (err) {
                    console.error(err);
                    return message.channel.send({embed: {color: "RED", description: "🆘  **|**  I could not obtain any search results"}});
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
    }
    if (command === "nc!search" || command === "nc!sc") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({embed: {color: "RED", description: "I'm sorry, but you need to be in a voice channel to play a music!"}});
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({embed: {color: "RED", description: "Sorry, but I need a **`CONNECT`** permission to proceed!"}});
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({embed: {color: "RED", description: "Sorry, but I need a **`SPEAK`** permission to proceed!"}});
        }
        if (!url || !searchString) return message.channel.send({embed: {color: "RED", description: "Please input link/title to search music"}});
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({embed: {
                color: "GREEN",
                description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
            }});
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    let embedPlay = new MessageEmbed()
                        .setColor("BLUE")
                        .setAuthor("Search results", message.author.displayAvatarURL())
                        .setDescription(`${videos.map(video2 => `**\`${++index}\`  |**  ${video2.title}`).join("\n")}`)
                        .setFooter("Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds");
                    // eslint-disable-next-line max-depth
                    message.channel.send(embedPlay).then(m => m.delete({
                        timeout: 15000
                    }))
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            max: 1,
                            time: 15000,
                            errors: ["time"]
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send({embed: {
                            color: "RED",
                            description: "The song selection time has expired in 15 seconds, the request has been canceled."
                        }});
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send({embed: {color: "RED", description: "🆘  **|**  I could not obtain any search results"}});
                }
            }
            response.delete();
            return handleVideo(video, message, voiceChannel);
        }

    } else if (command === "nc!skip") {
        if (!message.member.voice.channel) return message.channel.send({embed: {color: "RED", description: "I'm sorry, but you need to be in a voice channel to skip a music!"}});
        if (!serverQueue) return message.channel.send({embed: {color: "RED", description: "There is nothing playing that I could skip for you"}});
        serverQueue.connection.dispatcher.end("[runCmd] Skip command has been used");
        return message.channel.send({embed: {color: "GREEN", description: "⏭️  **|**  I skipped the song for you"}});

    } else if (command === "nc!stop") {
        if (!message.member.voice.channel) return message.channel.send({embed: {color: "RED", description: "I'm sorry but you need to be in a voice channel to play music!"}});
        if (!serverQueue) return message.channel.send({embed: {color: "RED", description: "There is nothing playing that I could stop for you"}});
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end("[runCmd] Stop command has been used");
        return message.channel.send({embed: {color: "GREEN", description: "⏹️  **|**  Deleting queues and leaving voice channel..."}});

    } else if (command === "nc!volume" || command === "vol") {
        if (!message.member.voice.channel) return message.channel.send({embed: {color: "RED", description: "I'm sorry, but you need to be in a voice channel to set a volume!"}});
        if (!serverQueue) return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
        if (!args[1]) return message.channel.send({embed: {color: "BLUE", description: `The current volume is: **\`${serverQueue.volume}%\`**`}});
        if (isNaN(args[1]) || args[1] > 100) return message.channel.send({embed: {color: "RED", description: "Volume only can be set in a range of **\`1\`** - **\`100\`**"}});
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolume(args[1] / 100);
        return message.channel.send({embed: {color: "GREEN", description: `I set the volume to: **\`${args[1]}%\`**`}});

    } else if (command === "nc!nowplaying" || command === "np") {
        if (!serverQueue) return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
        return message.channel.send({embed: {color: "BLUE", description: `🎶  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`}});

    } else if (command === "nc!queue" || command === "q") {
        if (!serverQueue) return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
        let embedQueue = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Song queue", message.author.displayAvatarURL())
            .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}`)
            .setFooter(`• Now Playing: ${serverQueue.songs[0].title}`);
        return message.channel.send(embedQueue);

    } else if (command === "nc!pause") {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send({embed: {color: "GREEN", description: "⏸  **|**  Paused the music for you"}});
        }
        return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});

    } else if (command === "nc!resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send({embed: {color: "GREEN", description: "▶  **|**  Resumed the music for you"}});
        }
        return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
    } else if (command === "nc!loop") {
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({embed: {color: "GREEN", description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`}});
        };
        return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
    }
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
    const serverQueue = queue.get(message.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 100,
            playing: true,
            loop: false
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`[ERROR] I could not join the voice channel, because: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send({embed: {color: "RED", description: `I could not join the voice channel, because: **\`${error}\`**`}});
        }
    } else {
        serverQueue.songs.push(song);
        if (playlist) return;
        else return message.channel.send({embed: {color: "GREEN", description: `✅  **|**  **\`${song.title}\`** has been added to the queue`}});
    }
    return;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        return queue.delete(guild.id);
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on("finish", () => {
            const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolume(serverQueue.volume / 100);

    serverQueue.textChannel.send({
        embed: {
            color: "BLUE",
            description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
        }
    });
}



//NzMwMjcxODg0MTE3MTQ3NjQ4.XwVE0A.WqM0Owv_y-GqWCp06slkdIUxH0Q

// login to Discord with your app's token

client.login('NzI5ODc5NDQyNTM2NzkyMDc3.XwPdJA.PPzWVYpU8bwpV0ioJzDW55Kq6ys');
