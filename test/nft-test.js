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
        const setGreetingTx = await nft.mintNFT("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://jessop-harmon-nft-bucket.s3.amazonaws.com/jessop-harmon-crypto-final-submission.json");
        await setGreetingTx.wait();
    })

    it("Can only mint 1 nft total", async function () {
        await expect(nft.mintNFT(
            "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 
            "https://jessop-harmon-nft-bucket.s3.amazonaws.com/jessop-harmon-crypto-final-submission.json")
            
        ).to.be.revertedWith("allTokensMinted")
    })
});
