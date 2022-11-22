import { Button, CardActionArea, CardActions } from '@mui/material'
import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import "./coin-title.scss";

function CoinTitle() {
    return (
        <div className="Coinblock-summary">
            <FaEthereum className="icon" color={EthPurple} />
            <div className="listTitle">
                <span className="heading">Latest block</span>
                <p className="description">Ethereum</p>
            </div>
        </div>
    );
};

export default CoinTitle;