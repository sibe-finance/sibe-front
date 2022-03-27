import React, {useState} from 'react';
import NFTItem from "./NFTItem";
import { useWallet } from '@solana/wallet-adapter-react';

export default function NFTMarketplace () {
    const [connectedNft, setConnectedNft] = useState(false)
    const wallet = useWallet();

    const myNftButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setConnectedNft(true);
        event.preventDefault();
    };

    const nftButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setConnectedNft(false);
        event.preventDefault();
    };

    return (

        <div className="body">
            <div className="nft-marketplace-wrapper">
                <h1 className="nft-marketplace-header">sibe nft</h1>
                <div className="nft-marketplace-items-wrapper">
                    <div className="decor"></div>
                    { wallet.connected && <div className="nft-buttons-container">
                        <button className="nft-button" onClick={myNftButtonHandler} style={{ backgroundColor: connectedNft ? '#303030' : 'transparent',  color: connectedNft ? 'white' : '#5e5e5e'}}>My NFTs</button>
                        <button className="nft-button" onClick={nftButtonHandler} style={{ backgroundColor: !connectedNft ? '#303030' : 'transparent',  color: !connectedNft ? 'white' : '#5e5e5e'}}>All</button>  
                    </div> }
                    {connectedNft && <div className="nft-items-wrapper">
                        <NFTItem></NFTItem>
                    </div> }
                    { !connectedNft && <div className="nft-items-wrapper">
                        <NFTItem></NFTItem>
                        <NFTItem></NFTItem>
                        <NFTItem></NFTItem>
                        <NFTItem></NFTItem>
                        <NFTItem></NFTItem>
                        
                    </div>}
                    <div className="arrows">
                        <div className="arrow-wrapper"><div className="switch-arrow" style={{transform: 'rotate(135deg)'}}></div></div>
                        <div className="arrow-wrapper"><div className="switch-arrow" style={{transform: 'rotate(-45deg)'}}></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}