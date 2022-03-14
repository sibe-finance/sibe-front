import React from 'react';

export default function DefiItem () {
    return (
        <div className="defi-item-wrapper">
            <div className="defi-item-pair" style={{minWidth: '25.5%'}}>
                <div className="defi-item-pair-img" />
                <div className="defi-item-pair-img" />
                <h4 className="defi-item-pair-name">Токен - Токен</h4>
            </div>
            <h4 className="defi-item-apy" style={{minWidth: '5%'}}>3.28%</h4>
            <h4 className="defi-item-tvl" style={{minWidth: '10%'}}>1.31 млн.</h4>
            <div className="defi-item-provider" />
            <div className="defi-item-buttons" style={{width: '40%'}}>
                <button className="defi-item-liq">+ Liquidity</button>
                <button className="defi-item-swap">Swap</button>
            </div>
        </div>
    )
}