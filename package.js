{
  "name": "MS-xRD",
  "version": "1.1.1",
  "description": "A WhatsApp bot created using Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js --deep-monitoring --attach --name MS-xRD",
    "stop": "pm2 stop MS-xRD",
    "restart": "pm2 restart MS-xRD"
  },
  "dependencies": {
    "@whiskeysockets/baileys": "github:AxellNetwork/Baileys",
    "pino": "^9.6.0",
    "pm2": "^5.4.3",
    "express": "^4.21.2",
    "axios": "^1.7.9",
    "file_size_url": "^1.0.6",
    "fs-extra": "^11.2.0",
    "node-fetch": "^3.3.2",
    "megajs": "^1.3.5",
    "qrcode-terminal": "^0.12.0",
    "yt-search": "^2.12.1",
    "api-dylux": "^1.8.5",
    "mongoose": "^8.9.4",
    "canvas": "^3.0.1",
    "@vreden/youtube_scraper": "^1.2.5",
    "wa-sticker-formatter": "^4.4.4",
    "xml2js": "^0.6.2",
    "xnxx-dl": "^1.0.2",
    "cheerio": "^1.0.0",
    "@sl-code-lords/movie-api": "1.0.0",
    "@sl-code-lords/movie-api": "1.0.0",
    "mime-type": "5.0.2"
  }
}
