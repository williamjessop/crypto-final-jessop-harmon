# Repo Details

| Name                | Value                                            |
| :------------------ | :---------------------------------------------   |
| **Course**          | CSCI310 - Advanced Programming Cryptocurrencies  |
| **Section**         | 1                                                |
| **Semester**        | Fall 2021                                        |
| **Students**        | William Jessop & Dakota Harmon                   |
| **GitHub Usernames**| williamjessop & Kota117                          |
| **Repository**      | https://github.com/williamjessop/crypto-final-jessop-harmon |

---
# Assignment Details
| Name | Value |
| :--- | :--- |
| Name | Ethereum NFT's |
| Description | A small CLI that can send a Testnet transaction |
| Due Date | 14-Dec-2021 |
| Status | In Progress |
| Self Grade | 100/100 |
| Notes | The full description of this project is below in this README.|

---
## Project Description
For this project we deployed our own NFT contracts to the Ethereum *Ropsten* testnet blockchain. We began by following simple tutorials and deploying the code that we found online. We then made a simple restriction on the contract that we found online and deployed that contract as well. 

---

## Project Structure
Much of the code in this repo is based on example code found on ethereum.org and hardhat.org. The code that was specifically written by us is mostly contained in the test/nft-test.js file. We also added an error, and a revert case to the contracts/MyNFT.sol file.

---
## Tools used
### Alchemy
For this project we used a suite of different tools. We did not start our own Ethereum node and instead we connected to a service known as [Alchemy](https://www.alchemy.com). This service allowed us to make Ethereum API calls without hosting our own full node. This service provides similar functionality to the Coinbase APIs.

### Hardhat
Hardhat is the set of development libraries we used to automate deployment and testing of out contract code. It is a commonly used Ethereum JS client library that wraps commonly used actions into API calls that make life easy. Hardhat relies on other dependencies such as web3 (A JS+Ethereum extension) and Ethers.js (Another JS+Ethereum extension).

### Testing W/ Mocha
To test our contract code we used the default library that is chosen by Hardhat. This happens to be the JS testing library known as Mocha. In addition to Mocha we made use of some custom test matchers that are included from hardhat.

### Additional Tools
There are a handful of other pieces we used to make this project work. 

We used a library known as dotenv to manage our environment and secret keys. 

We used a tool known as [Etherscan](https://ropsten.etherscan.io/) to find our transactions and contracts on the test chain.

We also used 2 Ethereum faucets to get test coins for our project. They can be found here: 
https://faucet.dimensions.network/
https://faucet.ropsten.be/


---
## The Project Pieces on the Chain

For this project we used the Ethereum account at the following address: 0xFEA8fFcDeD93ac2Be58fD43b1B9741Bcf873ED1d

### List of Contract Addresses
| Label | Symbol | Address |
| :--- | :--- | :--- |
| First NFT Deployed | TRY | Find me |
| Limited NFT | LIM | 0xD8b26fBa6A98d3E44444f2C885636Fda60ec2a63 |
| Final NFT | FIN | 0x99a1c91C40E10010A07Db3398c0eF7586215C624 |

### List of Interesting Transactions
| Label | Action | Transaction Hash |
| :--- | :--- | :--- |
| First Contract | Contract Deploy |  |
| First NFT | Mint NFT | 0x2080a843fdbffc72711c24c948d169297d2f7b5f2be6ad5e4f89e3492d3974c8 |
| Final Contract | Contract Deploy |  |
| Final NFT | Mint NFT | 0xfebf6ef8537f11b184c09686cccd9842cbd574c0c5f67be51b299cab4fc79cf3 |