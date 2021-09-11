const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
});
client.once("ready", () => {
console.log("THX FOR WATCHING | LIKE SHARE SUBSCRIBE TO VENOMEXE")
})
// WRITE YOUR CODE HERE
// NEXT VIDEO COMING WITH ADVANCED V13 HANDLER
// BTW CHECK OUT OUR BOT PUBLICLY AVAILABLE ON DISCORD
client.login(process.env.token);