require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin battle food section'; 
let testAccounts = [
"0x233f11cecab4456c6426feab00ce898d6142f404ab88a8e05a9b4c2373197a91",
"0xb99eba7082fee3c369d1f7ae9feec844cb103f7c1f8d82c5e5af7e010d47fd64",
"0xfec3b3d2789862b09c8fa04bd188cb60744456497c67861ec22a96498e07ba0b",
"0xcf578cc899d78e0b4c188c632cf57b8e590a456c7d4d78d20fa7349a156a2ef4",
"0x1485235ae647b2a58e0c6b61ba2d3e35bb1d009f249fff42fc7ff5bb2392f65b",
"0x43afba033d1cf7d532a50e11addc09412125d9d862d37a9b74ad71d02dbb659b",
"0x77ba3216faa8e9be879a8fb83f49b656a402f48f5f6fbeef73aae7e162a0eba0",
"0x29eb8b021321fe4ad474cb5c6c4d755736a96e937a7479e049e3d1d5f4f30b4f",
"0x1f16b87dd4d9fdeb1c2fed1559496ea68e51fb114472d2cd3f70735f95634b89",
"0xa19be15e4f8907cb024e173a5a79064b9e484f0b085e44a3f545d17267e1556c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
