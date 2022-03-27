import React from 'react';
import Burger from "./BurgerButton"
import github from "../static/img/github.svg";
import telegram from "../static/img/telegram.svg";
import twitter from "../static/img/twitter.svg";
import discord from "../static/img/discord.svg";


export default function Header (props:any) {
    return (
        <div className="header" style={{backgroundColor: props.open && "#191919"  }}>
            <a href="|" className="header-logo">
            </a>
            <nav className="header-menu">
                <ul className="header-menu-ul">
                    <li className="header-menu-li" onClick={props.staking}>Staking</li>
                    <li className="header-menu-li"> <a href="https://sibe-finance.github.io/sibe-docs/">Docs</a></li>
                    <li className="header-menu-li">Sibe paper</li>
                    <li className="header-menu-li" onClick={props.nft}>Sibe NFT</li>
                    <li className="header-menu-li">Roadmap</li>
                </ul>
            </nav>
            <nav className="header-socials">
                <ul className="header-socials-ul">
                    <li className="header-socials-li"><a href="github"><img src={github} alt="https://github.com/sibe-finance" /></a></li>
                    <li className="header-socials-li"><a href="telegram"><img src={telegram} alt="https://t.me/SIBEprotocol" /></a></li>
                    <li className="header-socials-li"><a href="twitter"><img src={twitter} alt="https://twitter.com/SibeGameFi?t=P1crNdFCL3F3p71_31zpLA&s=09" /></a></li>
                    <li className="header-socials-li"><a href="discord"><img src={discord} alt="https://discord.com/invite/yE3Q6mG9De" /></a></li>
                </ul>
            </nav>
            <a href="/" className="header-howto-link">
                How to buy
            </a>
            <Burger open={props.open} setOpen={props.setOpen} />
        </div>
    )
};