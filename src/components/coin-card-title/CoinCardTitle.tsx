import React, { lazy, Suspense } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material'
import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import "./coin-card-title.scss";
import { Coin } from '../../definitions/Coin';
import { SiBitcoincash } from 'react-icons/si';

function CoinTitle({coin}: {coin: Coin} ) {
    return (
        <div className="Coinblock-summary">
        { coin == Coin.Btc && [<FaBitcoin className="icon" color={BtcOrange} />]}
        { coin == Coin.Bch  && [<SiBitcoincash className="icon" color={BchGreen} />]}
        { coin == Coin.Eth  && [<FaEthereum className="icon" color={EthPurple} />]}
            <div className="listTitle">
                <span className="heading">Latest block</span>
                <p className="description">{coin}</p>
            </div>
        </div>
    );
};

export default CoinTitle;

