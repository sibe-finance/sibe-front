import React from 'react';
import DefiItem from './DefiItem';

export default function DefiWrapper () {
   return (
    <div className="defi-wrapper">
        <h1 className="defi-header h1">Participate in DeFi</h1>
        <div className="defi">
            <div className="defi-head">
                <h4 className="defi-header" style={{width: '30%', marginLeft: '15px'}}>Pair</h4>
                <h4 className="defi-header" style={{width: '10%'}}>APY</h4>
                <h4 className="defi-header" style={{width: '10%'}}>TVL</h4>
                <button className="defi-provider" style={{width: '50%'}}> Provider <div className="arrow" style={{borderColor: '#5e5e5e', marginTop: '5px'}}></div></button>
            </div>
            <div className="defi-content">
                <DefiItem />
                <DefiItem />
                <DefiItem />
                <DefiItem />
                <DefiItem />
                <DefiItem />
            </div>
        </div>
    </div>
   ) 
}