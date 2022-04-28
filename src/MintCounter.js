import React, { useState } from "react";
import { ethers } from "ethers";
import abi from './abi.json';


const MintCounter = () => {

    const [maxSupply, setMaxSupply] = useState(0);
    const [currentSupply, setCurrentSupply] = useState(0);

    const contractAddress = '0x5Af0D9827E0c53E4799BB226655A1de152A425a5'; // NFT address (Miladys)


    async function getSupply() {


        if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);

        const max = await contract.MAX_MILADYS(); // replace .MAX_MILADYS with max supply call function
        const current = await contract.standardMiladyCount(); // replace .standardMiladyCount with current supply call function

        setMaxSupply(max.toString());
        setCurrentSupply(current.toString());
        } else {
            console.log('No web3');
        }
    };

    getSupply();

    if (window.ethereum) {
        return <p>{currentSupply}/{maxSupply}</p>;
    } else {
        return <p>Install MetaMask</p>;
    }

};

export default MintCounter;