import React, {useState, useRef} from 'react';
import './App.css';
import "./mobile.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Overlay from "./components/Overlay";
import { useOnClickOutside } from "./hooks/hooks";
import { Connection } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';

import { PhantomWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, SlopeWalletAdapter, Coin98WalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');


const wallets = [
  /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
  new PhantomWalletAdapter(),
  new SlopeWalletAdapter(),
  new Coin98WalletAdapter(),
]


function App() {
  const [staking, setStaking] = useState(true);
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));



  const openStakingHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStaking(true);
    setOpen(false);
    event.preventDefault();
    return {staking, open};
}

  const openNFTHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStaking(false);
    setOpen(false);
    event.preventDefault();
    return {staking, open};
  }

  const wallet:any = useWallet();
  const network = "http://127.0.0.1:8899";
  const connection = new Connection(network, "confirmed");

  const getProvider = () => {
    const provider = new Provider(connection, wallet, {
      preflightCommitment: "confirmed",
    });
    return provider;
  };

  return (
    <div className="App">
    <Header nft={openNFTHandler} staking={openStakingHandler} open={open} setOpen={setOpen}/>
      {open ? <Overlay  nft={openNFTHandler} staking={openStakingHandler} /> : <Body staking={staking} />}
      { !open && <Footer />}
    </div>
  );
}

const AppWithProvider = () => (
  <ConnectionProvider endpoint="http://127.0.0.1:8899">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)

export default AppWithProvider;