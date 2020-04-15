const request = require('request-promise-native');
class dbfr{
	
	constructor(client, apikey){
		if(!client) return console.error(`[SYSTEM ERROR] Cette API n'est pas reconnu par le module`);
		this.client = client;
		this.apikey = apikey;
		this.client.on('ready', () => {
            this.post();
            setInterval(() => {
                this.post();
            }, 60000);
        });
	}
	async post() {
        try {
            return await request({
                uri: `https://api.wonderbotlist.com/v1/bot/${this.client.user.id}`,
                method: 'POST',
                headers: {
                    "api-key": this.apikey,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    serveurs: this.client.guilds.cache != null ? this.client.guilds.cache.size : this.client.guilds.size,
                    shard: this.client.options.shardCount
                },
                json: true
            });
        } catch (err) {
            throw err; // Throw directly and let the user handle the error
        }
    }
    //defini par defaut le type sur la route des bots
    async get(type = "bot", args) {
        let tpbotuser;
        //permet de savoir quelle type route on va utiliser (bot ou utilisateurs)
        if (type.toLowerCase() === "users" || type.toLowerCase() === "user") {
            tpbotuser = "user";
        } else if (type.toLowerCase() === "bot" || type.toLowerCase() === "bots") {
            tpbotuser = "bot";
        } else {
            return console.error(`[SYSTEM INFO] Veuillez renseigner l'argument "type"`);
        }
        try {
            return await request({
                uri: `https://api.wonderbotlist.com/v1/${tpbotuser}/${args}`,
                headers: {
                    "api-key": this.apikey,
                },
                json: true
            })
        } catch (err) {
            throw err;
        }
    }
}
module.exports = dbfr;
