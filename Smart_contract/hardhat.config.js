// https://eth-mainnet.g.alchemy.com/v2/foASFld6l1WMnj_XsBqk1UemZPHI1Ib_

require('@nomiclabs/hardhat-waffle');

module.exports = {
   solidity: '0.8.0',
   networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/HtDtBwGx4CWjjCctVadereq_GtRj45oY',
      accounts: ['e9c84a8b24e32e0a5d855c22c4bbf03b6526a72e28d308de11c47a8d9c9655b1'],
    },
   },
};