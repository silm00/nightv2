const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const { Client, MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');
const moment = require('moment');
// this event will only trigger one time after logging in

const PREFIX = 'nc!';


const activities_list = [
    "OFFICIAL BOT Night Cafe", 
    "Creator Foxie",
    "Jaga Kesehatan", 
    "command nc!help",
    "PODCAST RABU 20.00 WIB"
  //  "Waiting for next event"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
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
Welcome to the __**_Night Cafe Reborn_**__  ${member}`)
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
        message.channel.send('haloh haloh');

    }

    if (message.content === 'Foxie') {
        message.channel.send('haloh haloh');

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

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('nc!kick')) {
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

//test bot
client.on('message', message=> {
   if (message.content === 'cek1'){
       const channel = message.guild.channels.cache.find(ch => ch.id === '730736365234421830');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Halo @everyone, Jangan lupa hadir acara podcast kita nanti ya!!!, Jam 9 Wib ^^`);
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


client.on('message', message=> {
   if (message.content === 'cek2'){
       const channel = message.guild.channels.cache.find(ch => ch.id === '719212693860384880');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`MINA SIAPA MINA`);
};  9
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



//NzMwMjcxODg0MTE3MTQ3NjQ4.XwVE0A.WqM0Owv_y-GqWCp06slkdIUxH0Q

// login to Discord with your app's token

client.login('NzI5ODc5NDQyNTM2NzkyMDc3.XwPdJA.PPzWVYpU8bwpV0ioJzDW55Kq6ys');
