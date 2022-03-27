import React from 'react';


export default function Overlay (props:any) {
    return (
        <div className="overlay">
             <nav className="overlay-menu">
                <ul className="overlay-menu-ul">
                    <li className="overlay-menu-li" onClick={props.staking}>Staking</li>
                    <li className="overlay-menu-li"> <a href="https://sibe-finance.github.io/sibe-docs/">Docs</a></li>
                    <li className="overlay-menu-li">Sibe paper</li>
                    <li className="overlay-menu-li" onClick={props.nft}>Sibe NFT</li>
                    <li className="overlay-menu-li">Roadmap</li>
                </ul>
            </nav>
            <a href="/" className="overlay-howto-link">
                How to buy
            </a>
        </div>
    )
};
