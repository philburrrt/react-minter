import React, { useState } from "react";
import { ethers } from "ethers";
import abi from './abi.json';


const MintCounter = () => {

    const [maxSupply, setMaxSupply] = useState(0);
    const [currentSupply, setCurrentSupply] = useState(0);

    const contractAddress = '0xA37383d111a35B29689055AFA92c79b58BB33497'; // NFT address (Miladys)


    async function getSupply() {


        if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);

        const max = await contract.presaleSupply(); // replace .MAX_MILADYS with max supply call function
        const current = await contract.presaleCount(); // replace .standardMiladyCount with current supply call function

        setMaxSupply(max.toString());
        setCurrentSupply(current.toString());
        } else {
            console.log('No web3');
        }
    };

    getSupply();

    if (window.ethereum) {
        return <p>{currentSupply - 1}/{maxSupply}</p>; // in this particular contract, there is no currentSupply function, so i'm using 'presaleCount - 1' to display amt of presale minted so far  
    } else {
        return <p>Install MetaMask</p>;
    }

};

export default MintCounter;