const Player = require("../Player");
module.exports = {
    constructor(client)
    {
        client.on('packet', (packet) => {
            //console.log(packet)
        })
    },
};