import Sidebar from "../../components/sidebar/Sidebar";
import Bottombar from "../../components/bottombar/Bottombar";
import "./coin-page.scss";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CoinTitle  from '../../components/coin-title/CoinTitle'
import { Coin } from '../../definitions/Coin';
import CoinBlockSummary from '../../components/coinblock-summary/Coinblock-summary';

const CoinPage = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    return (
        <div className="home">
            {!isMobile && [<Sidebar />]}
            <div className="homeContainer">
                <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <CoinTitle coin={Coin.Btc} />
                </Grid>
                <CoinBlockSummary coin={Coin.Btc} />
            </div>
            {isMobile && [<Bottombar />]}
        </div>
    )
}

export default CoinPage;