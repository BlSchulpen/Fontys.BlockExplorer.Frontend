//import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Bottombar from "../../components/bottombar/Bottombar";
import "./home.scss";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CoinBlockSummary from '../../components/coinblock-summary/Coinblock-summary';
import { Coin } from '../../definitions/Coin';

const Home = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    return (
        <div className="home">
            {!isMobile && [<Sidebar />]}
            <div className="homeContainer">
                <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <Grid >
                        <CoinBlockSummary coin={Coin.Btc} />
                    </Grid>
                    <Grid >
                        <CoinBlockSummary coin={Coin.Bch} />
                    </Grid>
                    <Grid >
                        <CoinBlockSummary coin={Coin.Eth} />
                    </Grid>
                    <Grid>
                    </Grid>
                </Grid>
            </div>
            {isMobile && [<Bottombar />]}
        </div>
    )
}

export default Home;