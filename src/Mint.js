import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import abi from './abi.json';
import * as styled from './styles';

//script

const contractAddress = '0x5Af0D9827E0c53E4799BB226655A1de152A425a5'; // NFT address (Miladys)
const mintPrice = 0.08; // in ETH
const maxMint = 3; // maximum NFTs minted (per tx tx, through UI only)

const Mint = () => {

    const [mintAmt, setMintAmt] = useState(1);

    async function handleMint() {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            try {
                const response = await contract.mintMiladys(BigNumber.from(mintAmt), // replace .mintMiladys with mint function
                {
                    value: ethers.utils.parseEther((mintPrice * mintAmt).toString()),
                });
                console.log(response);
            } catch(error) {
                console.log(error);
            }
        }
    };

    const handleDecrement = () => {
        if (mintAmt <= 1) return;
        setMintAmt(mintAmt - 1);
    }

    const handleIncrement = () => {
        if(mintAmt >= maxMint) return;
        setMintAmt(mintAmt + 1);
    }

    return (
        <styled.MinterDIV>
            <div>
                <styled.IncrementButton onClick={handleDecrement}>-</styled.IncrementButton>
                <styled.InputBox type="number" value={mintAmt} />
                <styled.IncrementButton onClick={handleIncrement}>+</styled.IncrementButton>
            </div>
            <styled.MintButton onClick={handleMint}>Mint</styled.MintButton>
        </styled.MinterDIV>
    );

};

export default Mint;
