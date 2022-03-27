import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export default function StakeButton (props:any) {
    const wallet = useWallet()

    if(!wallet.connected) {
        return (
        <WalletMultiButton className="stake-input-button">Connect Wallet <div className="arrow"></div></WalletMultiButton>
        )
    } else {
        return (
            <button className="stake-submit-button">{props.children}</button>
        )
    }
};
