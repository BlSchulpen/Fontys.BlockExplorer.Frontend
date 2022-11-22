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
import CoinTitle from '../coin-title/CoinTitle';

function CoinBlockSummary() {
    return (
        <div className="Coinblock-summary">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CoinTitle/>
          <CardContent>
            <Table />
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
  };
  
  export default CoinBlockSummary;


  /*
                          <div className="listBox">
                                <FaEthereum className="icon" color={EthPurple} />
                                <div className="listTitle">
                                    <span className="heading">Latest block</span>
                                    <p className="description">Ethereum</p>
                                </div>
                            </div>
  */