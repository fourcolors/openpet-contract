// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenPetNFT is ERC721Enumerable, Ownable {
    struct Pet {
        string arweaveStorageLocation;
        string name;
    }

    mapping(uint256 => Pet) private pets;

    constructor() ERC721("OpenPetNFT", "PET") {}

    // Only owner can mint a new Pet NFT
    function mintPet(string memory _name, string memory _arweaveStorageLocation) external onlyOwner returns (uint256) {
        uint256 tokenId = totalSupply() + 1;
        _mint(msg.sender, tokenId);
        pets[tokenId] = Pet(_arweaveStorageLocation, _name);
        return tokenId;
    }

    // Only owner can update Arweave storage location
    function updateArweaveStorageLocation(uint256 _tokenId, string memory _newArweaveStorageLocation) external onlyOwner {
        require(_exists(_tokenId), "Pet does not exist");
        pets[_tokenId].arweaveStorageLocation = _newArweaveStorageLocation;
    }

    // Public function to get details of a specific pet
    function getPet(uint256 _tokenId) public view returns (string memory name, string memory arweaveStorageLocation) {
        require(_exists(_tokenId), "Pet does not exist");
        return (pets[_tokenId].name, pets[_tokenId].arweaveStorageLocation);
    }
}