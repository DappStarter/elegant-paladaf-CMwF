require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth screen collect gesture cart flower gasp'; 
let testAccounts = [
"0x9e12ba9ade44d1501c4d9b30d3d7e9bc3727c83be1aa7096a9b1ac443ea1c967",
"0x3bd371126737e11317eceb0921b6ef63f9f237af2d4c72ec31484bd3cdc89502",
"0x4159db62a3df8208ed10d28744c02f15f9bc13918dc0282284c11350c94a8f63",
"0xfd7a1cf1a4ba3c50984e6e548cfded78f0aaef2ab1691c70d980829f54e78c40",
"0x238fe49e64b3ce76de0d7211fa9d6e6646c5bb90727bd77e184eeb96d450dac5",
"0xd487d32d7cd80e59a2941158b3d385fd2562f5254e2806d1f2f4769416e78eb8",
"0x70b89a8098c2600db84787f22beb00fe7e0d6c308fcb1b7bd3255fd29321ee6c",
"0x629b10ca765594b564b5ce3fa5954a99ae84aa7d1fe426a08628bcdb10101b49",
"0x19d2b1573039b18030f3c1cc59c378a1d2c9d21c1c4990a9a7a39f9678b43f7f",
"0x25fea02d75a5b66453f745b043193da02a8be2b6b3fa3ece0ca0608c4c5f0d18"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

