// wallet connect
// change the network to Mumbai Testnet
// if wallet is not connected, display wallet connect button

import React, { useEffect } from "react";

const WalletConnect = ({ currentAccount, setCurrentAccount }) => {
  // manage state of the wallet

  // confirm that the user has MetaMask installed
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have MetaMask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
        // store the user's address if they have MetaMask
        const accounts = await ethereum.request({ method: "eth_accounts" });
      
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]);
  }catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  console.log('checkIfWalletIsConnected called');
  checkIfWalletIsConnected();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [currentAccount]);

 
  return (
    <div className="wallet-container">
      <button onClick={connectWalletAction}>Connect Wallet</button>
    </div>  
  );
};

export default WalletConnect;