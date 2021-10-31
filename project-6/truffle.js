/*
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
*/


const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "abf4be700dc042b893eac9db3d8ad511";
const fs = require('fs');
const mnemonic = "mail van segment lift napkin obvious always under letter derive vague chunk"

module.exports = {
      networks: {
        development: {
          host: "127.0.0.1",
          port: 8545,
          network_id: "*" // Match any network id
        },
        rinkeby: {
          provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
          network_id: 4,       // Ropsten's id
          gas: 5500000,        // Ropsten has a lower block limit than mainnet
          confirmations: 2,    // # of confs to wait between deployments. (default: 0)
          timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
          skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        }
  }
};
