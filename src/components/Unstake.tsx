import React, {useState} from 'react';
import StakeButton from "./StakeButton";
import { useWallet } from '@solana/wallet-adapter-react';
import AddressBalance from "./AddressBalance";

export default function Unstake () {
    const [fee, setFee] = useState(true)
    const wallet = useWallet();

    const feeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setFee(true);
        event.preventDefault();
    };

    const noFeeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setFee(false);
        event.preventDefault();
    };

    return (
        <div className="stakeSol-wrapper">
            <div className="stake-input-wrapper">
                { wallet.connected && <AddressBalance />}
                <h3 className="stake-input-header">Enter amount</h3>
                <div className="input-wrapper">
                    <input type="number" className="stake-input" id="stake-input" placeholder="0" min="0"  step="any" />
                    <label htmlFor="stake-input" className="stake-input-label">SOL</label>
                </div>
                { wallet.connected && <div className="unstake-options">
                        <div className="unstake-op" onClick={feeHandler} style={{backgroundColor: fee ? '#1A1A1A' : 'transparent'}}>
                            <p className="option-name">Unstake now</p>
                            <p className="option-sum">11.234 SOL</p>
                            <option value="" className="commission">Commission from 0.3%</option>
                        </div>
                        <div className="unstake-op" onClick={noFeeHandler} style={{backgroundColor: !fee ? '#1A1A1A' : 'transparent'}}>
                            <p className="option-name">Unstake in 2 days</p>
                            <p className="option-sum">11.234 SOL</p>
                            <option value="" className="commission">Comission 0%</option>
                        </div>
                 </div> }
                <StakeButton children="Unstake" />
            </div>
            <div className="stake-info">
                <p className="stake-info-name">Exchange rate</p>
                <p className="stake-info-value">1 SIBE ≈ 1.03569 SOL</p>
            </div>
        </div>
    )
}