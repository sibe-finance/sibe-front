export default function DefiItem () {
    return (
        <div className="defi-item-wrapper">
            <div className="defi-item-pair">
                <div className="defi-item-pair-img" />
                <div className="defi-item-pair-img" />
                <h4 className="defi-item-pair-name">Токен - Токен</h4>
            </div>
            <h4 className="defi-item-apy">3.28%</h4>
            <h4 className="defi-item-tvl">1.31 млн.</h4>
            <div className="defi-item-provider" />
            <div className="defi-item-buttons">
                <button className="defi-item-liq">+ Liquidity</button>
                <button className="defi-item-swap">Swap</button>
            </div>
            <h4 className="defi-item-header defi-item-header--1">Pair</h4>
            <h4 className="defi-item-header defi-item-header--2">APY</h4>
            <h4 className="defi-item-header defi-item-header--3">TVL</h4>
            <h4 className="defi-item-header defi-item-header--4">Provider</h4>
        </div>
    )
}