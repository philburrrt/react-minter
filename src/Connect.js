import { Web3Provider } from '@ethersproject/providers';
import React, { useState } from 'react';
import * as styled from './styles';


const Connect = ({accounts, setAccounts}) => {
    
    const address = accounts[0];
    const [message, setMessage] = useState('Connect');
    const [chainId, setChainId] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccounts(accounts);
            setMessage("0x..." + accounts[0].slice(-4));

            const network = await window.ethereum.request({ method: 'eth_chainId' });
            setChainId(network);

            if (network !== '0x4'){ // Change required network here
                setErrorMessage('Wrong network');
            } else {
                setErrorMessage(null);
            };
        };
    };

    if (window.ethereum) {    
    window.ethereum.on('chainChanged', handleChainChanged);
    window.ethereum.on('accountsChanged', changeAccount);
    };

    function handleChainChanged(_chainId) {
        window.location.reload();
    };

    async function changeAccount(accounts) {
        if (accounts.length === 0) {
            setAccounts(accounts);
            setMessage('Connect');
        } else {
            setAccounts(accounts);
            setMessage("0x..." + accounts[0].slice(-4));
        }
    }

    function disconnectAccount() {
        setAccounts([]);
        setMessage('Connect');
    }

    if (address == null) {
        return( 
            <div>
                <button onClick={connectAccount}>{message}</button>
                <styled.ErrorMsg>{errorMessage}</styled.ErrorMsg>
            </div>
        );
    } else{
        return(
            <div>
                <button onClick={disconnectAccount}>{message}</button>
                <styled.ErrorMsg>{errorMessage}</styled.ErrorMsg>
            </div>
        );
    };

};

export default Connect;