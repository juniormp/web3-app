import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
export const TransactionContext = React.createContext();


import { contractAbi, contractAddress } from '../../utils/constants';


const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    
    const transactionsContract = new ethers.Contract(contractAddress, contractAbi, signer);

    console.log({
        provider,
        signer,
        transactionsContract
    })
}

export const TransactionProvider = ({children}) => {

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({method: 'eth_accounts' });
        console.log(accounts);
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    return (
        <TransactionContext.Provider value={{value: 'teste'}}>
            {children}
        </TransactionContext.Provider>
    )
}
 