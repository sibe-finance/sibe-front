import React, {useState} from 'react';
import Stake from './Stake';
import Unstake from './Unstake';
import InfoItem from './InfoItem';


export default function StakeSOL () {
    const [stake, setStake] = useState(true);

    const stakeButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStake(true);
        event.preventDefault();
    };

    const unstakeButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStake(false);
        event.preventDefault();
    };

    return (
        <div className="stakeSol">
            <InfoItem />
            <h1 className="stakeSOL-header h1">Stake Solana</h1>
            <div className="stakeSOl-wrapper">
                <div className="decor"></div>
                <div className="stake-unstake-container">
                    <button className="stake-button stakeSOL-button" onClick={stakeButtonHandler} style={{ backgroundColor: stake ? '#303030' : 'transparent',  color: stake ? 'white' : '#5e5e5e'}}>Stake</button>
                    <button className="unstake-button stakeSOL-button" onClick={unstakeButtonHandler} style={{ backgroundColor: !stake ? '#303030' : 'transparent',  color: !stake ? 'white' : '#5e5e5e'}}>Unstake</button>  
                </div>
                {stake && <Stake />}
                {!stake && <Unstake />}  
            </div>
        </div>
    )
}