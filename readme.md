<div align="center">
  <p>
    <a href="https://discordbots.fr"><img src="https://discordbots.fr/img/logo.svg" width="100" height="100" alt="discordbots.fr" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/h6vhJUy"><img src="https://discordapp.com/api/guilds/501017909389295616/embed.png" alt="Serveur Discord" /></a>
    <a href="https://www.npmjs.com/package/dbfr"><img src="https://img.shields.io/npm/v/dbfr.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/dbfr"><img src="https://img.shields.io/npm/dt/dbfr.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/dbfr/"><img src="https://nodei.co/npm/dbfr.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

# Description
dbfr est un module qui vous servira a poster les stats de vos bots sur l'API du site https://discordbots.fr/

## Installation
`npm i dbfr -s`

## IMPORTANT
dbfr est un module compatible uniquement avec les libs en Java Script, tels que Discord.js ou Eris...

## Exemple POST
```js
const Discord = require("discord.js");
const client = new Discord.Client();

var DBFR = require("dbfr");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  dbfr.post()
});

client.login("BOT_TOKEN")
```

## Exemple GET
### Discord.js
```js
const Discord = require("discord.js");
const client = new Discord.Client();

const DBFR = require("dbfr");
const dbfr = new DBFR(client, 'Token discord bot fr');

client.on("ready", () => {
  console.log("Ready!");
});

client.on('message', msg => {
  const args = msg.content.split(" ").slice(1);
  const type = "user";//user ou bot (par defaut bot est choisi)
  if(msg.content.startsWith("test")){
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(type, args).then(r => { console.log(r) })
  }
});

client.login("BOT_TOKEN")
```
### Eris
```js
const Eris = require("eris");
const bot = new Eris("BOT_TOKEN");

const DBFR = require("dbfr");
const dbfr = new DBFR(bot, 'Token discord bot fr');

bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
  const args = msg.content.split(" ").slice(1);
  const type = "user";//user ou bot (par defaut bot est choisi)
  if(msg.content.startsWith === "test") {
    if(!args) return console.log("Erreur, pas d'argument");
    dbfr.get(type, args).then(r => { console.log(r) });
  }
});

bot.connect();
```
### API
## Vue d'un bot
```json
{
    "id": 337997289484451840,
    "username": "Celestia",
    "owner": 193090359700619264,
    "owners": [
        "359767845762236436",
        "160868823887511552"
    ],
    "github": null,
    "descriptcourt": "Bot de modération et de fun",
    "descriptlong": "yolo je get les infos (in HTML)",
    "descriptvideo": null,
    "approuved": false,
    "lib": "discord.js",
    "prefix": "!",
    "invitelink": "https://b.discordbots.fr/invite/337997289484451840",
    "supportserver": null,
    "siteweb": null,
    "shards": 0,
    "server": 0,
    "vote": 0,
    "avatar": "https://cdn.discordapp.com/avatars/337997289484451840/8a9696c309c80a73c02efb74e0a72862.png?size=512",
    "langue": [],
    "tags": [],
    "date": null
}
```

## Vue d'un utilisateur
```json

    "id": 193090359700619264,
    "username": "Ten-No-Kami-Sama7777",
    "bio": "",
    "website": null,
    "facebook": null,
    "github": null,
    "twitter": null,
    "youtube": null,
    "linkedin": null,
    "avatar": "https://cdn.discordapp.com/avatars/193090359700619264/1575890721026ce092188702dd69ccd3.png?size=512",
    "isProfilPublic": true,
    "langue": "fr",
    "roles": [
        "ROLE_ADMIN",
        "ROLE_USER"
    ],
    "nitro": true,
    "mailvisible": true,
    "mail": "kami-sama@discordbots.fr"
}
```
