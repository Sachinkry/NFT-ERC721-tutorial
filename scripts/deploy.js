// Import ethers from hardhat package
const { ethers } = require("hardhat")

async function main() {

    // getContractFactory is an abstraction used to deploy smart contracts.
    // nftContract is a factory for instance of GameItem contract  
    const nftContract = await ethers.getContractFactory("GameItem");

    // deploy the contract
    const deployedNFTContract = await nftContract.deploy();

    // print the contract address 
    console.log("NFT Contract Address: ", deployedNFTContract.address);
}

// Call the main function and see if there is an error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });