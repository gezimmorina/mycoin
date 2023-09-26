const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "645dab025706b1a3e99bee239f1b3b7c401bc7d087631bc13f83b81bf9e71ff0"
);
const myWalletAddress = myKey.getPublic("hex");

let gezimCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key ketu", 10);
tx1.signTransaction(myKey);
gezimCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
gezimCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of gezim is",
  gezimCoin.getBalanceOfAddress(myWalletAddress)
);
gezimCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", gezimCoin.isChainValid());
