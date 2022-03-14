import React, {useState} from 'react';
import NFTItem from "./NFTItem";

export default function NFTMarketplace () {
    const [nft, setNft] = useState(true)

    const myNftButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNft(true);
        event.preventDefault();
    };

    const nftButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNft(false);
        event.preventDefault();
    };

    return (

        <div className="body">
            <div className="nft-marketplace-wrapper">
                <h1 className="nft-marketplace-header">sibe nft</h1>
                <div className="nft-marketplace-items-wrapper">
                <div className="nft-buttons-container">
                    <button className="nft-button" onClick={myNftButtonHandler} style={{ backgroundColor: nft ? '#303030' : 'transparent',  color: nft ? 'white' : '#5e5e5e'}}>My NFTs</button>
                    <button className="nft-button" onClick={nftButtonHandler} style={{ backgroundColor: !nft ? '#303030' : 'transparent',  color: !nft ? 'white' : '#5e5e5e'}}>All</button>  
                </div>
                <div className="nft-items-wrapper">
                    <NFTItem></NFTItem>
                    <NFTItem></NFTItem>
                </div>
                </div>
        </div>
        </div>
    )
}