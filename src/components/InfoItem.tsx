import React from 'react';

export default function InfoPanel () {
    const epoch:number = 61.5;
    return (
        <div className="info-panel-wrapper">
            <div className="info-item">
                <h4 className="info-item-header">SIBE / SOL price</h4>
                <span className="info-item-var"> 0 <span>SOl</span></span>
                <h4 className="info-item-footer">≈ $94.89</h4>
            </div>
            <div className="info-item">
                <h4 className="info-item-header">Total SOL staked</h4>
                <span className="info-item-var"> 0 <span>SOl</span></span>
                <h4 className="info-item-footer">≈ $94.89</h4>
            </div>
            <div className="info-item">
                <h4 className="info-item-header">Epoch</h4>
                <div className="epoch">
                    <span className="info-item-var">{epoch}%</span>
                    <div className="epoch-outside">
                        <div className="epoch-inside" style={{width: epoch + 'px', borderRadius: epoch === 100 ? '20px' : '20px 0 0 20px'  }}></div>
                    </div>
                </div>
                <h4 className="info-item-footer">ETA: 13h 14m</h4>
            </div>
            <div className="info-item">
                <h4 className="info-item-header">APY</h4>
                <span className="info-item-var">0%</span>
                <a href='/' className="info-item-footer">Stats ›</a>
            </div>
            <div className="info-item">
                <h4 className="info-item-header">Validators</h4>
                <span className="info-item-var">232</span>
                <a href="/" className="info-item-footer">Show list ›</a>
            </div> 
        </div>
    )
}