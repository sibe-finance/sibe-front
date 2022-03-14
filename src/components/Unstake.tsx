import React, {useState} from 'react';

export default function Unstake () {
    const [fee, setFee] = useState(true)

    const FeeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setFee(true);
        event.preventDefault();
    };

    const NoFeeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setFee(false);
        event.preventDefault();
    };

    return (
        <div className="stakeSol-wrapper">
            <div className="stake-input-wrapper">
                <h3 className="stake-input-header">Enter amount</h3>
                <input type="number" className="stake-input" placeholder='0 SOL' /> 
                <button className="stake-input-button">Connect wallet <div className="arrow"></div></button>
            </div>
            <div className="stake-info">
                <p className="stake-info-name">Exchange rate</p>
                <p className="stake-info-value">1 SIBE ≈ 1.03569 SOL</p>
            </div>
        </div>
    )
}