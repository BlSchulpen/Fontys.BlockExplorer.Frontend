import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import "./coin-title.scss";
import { Coin } from '../../definitions/Coin';
import { SiBitcoincash } from 'react-icons/si';
import Card from '@mui/material/Card';

function CoinTitle({coin}: {coin: Coin} ) {
    return (
        
        <div className="Coin-title">
                <Card className='card'>

        { coin == Coin.Btc && [<FaBitcoin className="icon" color={BtcOrange} />]}
        { coin == Coin.Bch  && [<SiBitcoincash className="icon" color={BchGreen} />]}
        { coin == Coin.Eth  && [<FaEthereum className="icon" color={EthPurple} />]}
            <div className="listContent">
                <span className="heading">{coin}</span>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nibh vulputate, fermentum ante at, auctor dolor. Proin id quam in diam pulvinar molestie imperdiet id enim. Pellentesque molestie nisl id velit lacinia volutpat. Nullam finibus purus ex, quis mattis ante sollicitudin at. Ut porta tortor et justo pellentesque, ac suscipit tortor vehicula. Aliquam accumsan elit id urna volutpat, vitae molestie ipsum vestibulum. Nulla ut ex lectus. Nunc a pharetra sem, non placerat odio.</p>
            </div>
        </Card>
        </div>
    );
};

export default CoinTitle;

