import { useWallet } from '@solana/wallet-adapter-react';

import {  WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Addressbalance () {
    const { publicKey } = useWallet();
    // @ts-ignore: Object is possibly 'null'.
    const key = publicKey.toBase58();

    return (
        <div className="address-balance-wrapper">
            <div className="address-balance" style={{marginBottom: "1vw"}}>
                <p className="adress-balance-header">Address</p>
                < WalletMultiButton className="address-value"> {key.slice(0,5) + '...' + key.slice(-5)}<div className="arrow" style={{borderColor: '#5e5e5e', margin: '0 0 5px 7px'}}></div></ WalletMultiButton>
            </div>
            <div className="address-balance">
                <p className="adress-balance-header">Balance</p>
                <p className="balance-value">11.234 SOL</p>
            </div>
        </div>
    )
}