import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'
import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import Table from "../../components/table/Table";
import "./coinblock-summary.scss";
import CoinTitle from '../coin-card-title/CoinCardTitle';
import { Coin } from '../../definitions/Coin';

function CoinBlockSummary({coin}: {coin: Coin}) {
    return (
        <div className="Coinblock-summary">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CoinTitle coin={coin} />
          <CardContent>
            <Table />
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
  };
  
  export default CoinBlockSummary;