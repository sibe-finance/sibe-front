import StakeButton from "./StakeButton";
import { useWallet } from '@solana/wallet-adapter-react';
import AddressBalance from "./AddressBalance";

export default function Stake () {
    const wallet = useWallet();

        return (
            <div className="stake-wrapper">
                <div className="stake-input-wrapper">
                { wallet.connected && <AddressBalance />}
                    <h3 className="stake-input-header">Enter amount</h3>
                    <div className="input-wrapper">
                        <input type="number" className="stake-input" id="stake-input" placeholder="0" min="0"  step="any" />
                        <label htmlFor="stake-input" className="stake-input-label">SOL</label>
                    </div>
                    <StakeButton children="Stake" />
                </div>
                <div className="stake-info">
                    <p className="stake-info-name">You will receive</p>
                    <p className="stake-info-value">0 SIBE</p>
                </div>
                <div className="stake-info">
                    <p className="stake-info-name">Exchange rate</p>
                    <p className="stake-info-value">1 SIBE ≈ 1.03569 SOL</p>
                </div>
                <div className="stake-info">
                    <p className="stake-info-name">Deposit fee</p>
                    <p className="stake-info-value">0%</p>
                </div>
            </div>
        )
}

    