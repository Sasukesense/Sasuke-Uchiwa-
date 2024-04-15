const axios = require('axios');

const Prefixes = [
  '/ai',
  'Charingan',
  'Uchiwa',
  '+ai',
  'Sasuke',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("✰━━━━━━━━━ 🟢\n• 𝑎̀ 𝑙'𝑎𝑖𝑑𝑒 𝑑𝑒 𝑚𝑜𝑛 𝑐ℎ𝑎𝑟𝑖𝑛𝑔𝑎𝑛 𝑗𝑒 𝑝𝑜𝑢𝑟𝑟𝑎𝑠 𝑟𝑒𝑝𝑜𝑛𝑑𝑟𝑒 𝑎̀ 𝑡𝑜𝑢𝑡𝑒 𝑡𝑒𝑠 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛 ⛹️!✰━━━━━━━━━━━✰\n𝗕𝗼𝘁 𝗯𝘆🔱 𝐺𝑈𝑌   𝐵𝑂𝑀𝐼𝑆𝑆𝑂⚜️ ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply("🔱 𝐺𝑈𝑌   𝐵𝑂𝑀𝐼𝑆𝑆𝑂⚜️🛑\n════════════════\n"+answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
