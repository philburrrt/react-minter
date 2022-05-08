import React, { useState } from 'react';
import * as styles from './styles.js';


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
                <styles.connectButton onClick={connectAccount}>{message}</styles.connectButton>
                <styles.ErrorMsg>{errorMessage}</styles.ErrorMsg>
            </div>
        );
    } else{
        return(
            <div>
                <styles.connectButton onClick={disconnectAccount}>{message}</styles.connectButton>
                <styles.ErrorMsg>{errorMessage}</styles.ErrorMsg>
            </div>
        );
    };

};

export default Connect;