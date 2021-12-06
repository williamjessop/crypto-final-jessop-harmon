const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
    let NFTContract;
    let nft;

    it("Should be deployed", async function () {
        NFTContract = await ethers.getContractFactory("MyNFT");
        nft = await NFTContract.deploy("Test NFT", "TEST");
        await nft.deployed();
    });

    it("Can mint 1 nft", async function () {
        const setGreetingTx = await nft.mintNFT("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://jessop-harmon-nft-bucket.s3.amazonaws.com/nft-metadata.json");
        await setGreetingTx.wait();
    })

    it("Can only mint 5 total", async function () {
        for(let i=0; i < 4; i++){
            let setGreetingTx = await nft.mintNFT("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://jessop-harmon-nft-bucket.s3.amazonaws.com/nft-metadata.json");
            await setGreetingTx.wait();
        }

        await expect(nft.mintNFT(
            "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 
            "https://jessop-harmon-nft-bucket.s3.amazonaws.com/nft-metadata.json")
            
        ).to.be.revertedWith("allTokensMinted")
    })
});
