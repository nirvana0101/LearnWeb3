
const hre = require("hardhat");

async function main() {

  const nft =  await hre.ethers.deployContract("NFTee")

  await nft.waitForDeployment()

  console.log("NFT contract address:",nft.target)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(0)
});
