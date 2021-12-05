const hre = require("hardhat");

async function main() {

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.deploy("NFT Attempt 1", "TRY");

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
