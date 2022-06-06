# Twitter-Final

This is my one Twitter clone version with Moralis, Reactjs, and web3uikit

## Here is the steps I followed

- clone starter project
- install npm i -D hardhat
- initialize hardhat: npx hardhat
- install .env: npm i -D dotenv
- install etherscaner: npm i -D @nomiclabs/hardhat-etherscan
- build your smart contract
- after finishing your smart contract prepare your deploy script file
- prepare your .env file & add your API_KEY, POLYGON_MUMBAI, PRIVATE_KEY
- prepare your hardhat.config.js & add the networks to connect your contract
- prepare to compile & deploy: npx hardhat compile => itn should return Compiled 2 Solidity files successfully
- then deploy: `npx hardhat run scripts/deployMarketSentiment.js --network mumbai`
- save the MarketSentiment deployed address to: x
- To verify your contract(Optional): `npx hardhat verify 0x7f7825eBE22dCC9b4935848e2b47f79EaF376aD3 --network mumbai`
- we can use the polygon interface to interact with our contract to add tickers & vote for them https://mumbai.polygonscan.com/address/0xE0999E5f5dbF69Ee22dCaCaF012977cB49a118E7#readContract
- add frontend bubbles and moralis api was added to index.js file (appId, serverUrl) You can get/make one server from https://admin.moralis.io/servers & copy (appId, serverUrl)

- Create a server that syncs with the smart contract & moralis db. Constantly keep looking @ the smart contract transaction & it will be record them on moralis database server. To create one go to https://admin.moralis.io/servers
  To create one follow this video https://youtu.be/MI_Se26Sfmo?t=3095

- queries Vote class & creates a subscription on any oralis rows update. Then gets an obj to check if the update is on ETH, LINK, or BTC

- deployed to Netlify
