import React, {useState} from 'react';

export default function Unstake () {
    const [options, setOptions] = useState(false);

    const handleOptionsOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOptions(!options);
        event.preventDefault();
    }

    return (
        <div className="stakeSol-wrapper">
            <div className="stake-input-wrapper">
                <h3 className="stake-input-header">Enter amount</h3>
                <div className="input-wrapper">
                    <input type="number" className="stake-input" id="stake-input" placeholder="0" min="0"  step="any" />
                    <label htmlFor="stake-input" className="stake-input-label">SOL</label>
                </div>
                <div className="wallet-options">
                    <button className="stake-input-button" onClick={handleOptionsOpen} style={{borderRadius: options ? '20px 20px 0 0' : '20px', color: options ? 'grey' : 'white'}} > {options? 'Choose wallet' : 'Connect wallet' }<div className="arrow" style={{borderColor: options ? 'grey' : 'white', transform: options? 'rotate(225deg)' : 'rotate(45deg)', marginTop: options ? '7px' : '0'}}></div></button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}}>Phantom</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}}>Sollet</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}}>Sollet (Extension)</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}} >Solflare</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}} >Solflare Web</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}}>Coin98</button>
                    <button className="wallet-op" style={{ display: options ? 'inherit' : 'none'}}>Slope</button>
                </div>
            </div>
            <div className="stake-info">
                <p className="stake-info-name">Exchange rate</p>
                <p className="stake-info-value">1 SIBE ≈ 1.03569 SOL</p>
            </div>
        </div>
    )
}