const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "false",
OWNER_REACT: process.env.OWNER_REACT || "false", // true or false
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "KING-MS_YT 💚",
FOOTER: process.env.FOOTER || "KING-MS_YT 💚",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "3",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/LXh1pV1V/4d706efa31e4e172.jpg",
SESSION_ID: process.env.SESSION_ID || "jrAgHAAZ#g1uiVdAqjeddD3L3yQw0KWnPZiDDEsLLJHqztxJzNjg",
OWNER_NUMBER: process.env.SESSION_ID || "94767861594",
AUTO_VOICE: process.env.AUTO_VOICE || "false", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "false", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "false", // true or false  
PREFIX: process.env.PREFIX || "."
};

