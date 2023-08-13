import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
  },

  networks: {
    "opstack-testnet": {
      url: "https://rpc.opstack.org", // Replace with the actual RPC URL for the OP Stack testnet
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    "zora-goerli": {
      url: "https://testnet.rpc.zora.energy/",
      accounts: [process.env.WALLET_KEY as string],
    },
    // for mainnet
    "base-mainnet": {
      url: "https://mainnet.base.org",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for testnet
    "base-goerli": {
      url: "https://goerli.base.org",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for local dev environment
    "base-local": {
      url: "http://localhost:8545",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: "hardhat",
};

export default config;
