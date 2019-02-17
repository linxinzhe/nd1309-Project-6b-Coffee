var HDWalletProvider = require("truffle-hdwallet-provider");
var MNEMONIC = "enlist scene predict panda element donkey essay mother original stand oven wheat";
var ENDPOINT = "https://rinkeby.infura.io/v3/43e6083cfbcf478ca652a9f43cc75fac";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, ENDPOINT)
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        }
    }
};