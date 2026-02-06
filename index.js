import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import quizListener from "./commands/quizListener.js";
import jishoListener from "./commands/jishoListener.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

// registrar quiz
client.on(quizListener.name, (...args) =>
  quizListener.execute(...args)
);

// registrar jisho
client.on(jishoListener.name, (...args) =>
  jishoListener.execute(...args)
);

client.login(process.env.BOT_TOKEN);
