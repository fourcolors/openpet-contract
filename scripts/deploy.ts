import { ethers } from "hardhat";

async function main() {
  const nft = await ethers.deployContract("OpenPetNFT", [], {
    gasPrice: 30000000000,
  });

  await nft.waitForDeployment();

  console.log("NFT Contract Deployed at " + nft.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
