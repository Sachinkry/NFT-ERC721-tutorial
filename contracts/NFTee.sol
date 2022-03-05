// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//Import openzeppelin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GameItem is ERC721 {
    // GameItem is ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
    
    constructor() ERC721("GameItem", "ITM") {
        // Mint NFT to yourself
        _mint(msg.sender, 2);
    }
}