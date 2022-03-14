import React, {useState} from 'react';
import StakeSOL from './StakeSOL';
import DefiWrapper from './DefiWrapper';

export default function Body () {
    const [stake, setStake] = useState(true);
    const [defi, setDefi] = useState(false);

    const changeStakeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStake(true);
        setDefi(false);
        event.preventDefault();
        return {stake, defi};
    }

    const changeDefiHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStake(false);
        setDefi(true);
        event.preventDefault();
        return {stake, defi};
    }

    return (
        <div className="body">
            <nav className="body-nav">
                <ul className="body-ul">
                    <li className="body-li"><button className="body-nav-button" style={{ color: stake ? "#00b2ff" : "#5e5e5e"}} onClick={changeStakeHandler}>Staking</button></li>
                    <li className="body-li"><button className="body-nav-button" style={{ color: defi ? "#00b2ff" : "#5e5e5e"}}  onClick={changeDefiHandler}>Defi</button></li>
                </ul>
            </nav>
            {stake && <StakeSOL />}
            {defi && <DefiWrapper />}
        </div>
    )
}