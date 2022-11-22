//import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Bottombar from "../../components/bottombar/Bottombar";
import Table from "../../components/table/Table";
import "./home.scss";
import Grid from '@mui/material/Grid';
import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CoinBlockSummary from '../../components/coinblock-summary/Coinblock-summary';

const Home = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    return (
        <div className="home">
            { !isMobile && [<Sidebar />]}
            <div className="homeContainer">
                <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <Grid >
                        <div className="listContainer">
                            <div className="listBox">
                                <FaBitcoin className="icon" color={BtcOrange} />
                                <div className="listTitle">
                                    <span className="heading">Latest block</span>
                                    <p className="description">Bitcoin</p>
                                </div>
                            </div>
                            <Table />
                        </div>
                    </Grid>
                    <Grid >
                        <div className="listContainer">
                            <div className="listBox">
                                <SiBitcoincash className="icon" color={BchGreen} />
                                <div className="listTitle">
                                    <span className="heading">Latest block</span>
                                    <p className="description">Bitcoin cash</p>
                                </div>
                            </div>
                            <Table />
                        </div>
                    </Grid>
                    <Grid >
                        <div className="listContainer">
                            <div className="listBox">
                                <FaEthereum className="icon" color={EthPurple} />
                                <div className="listTitle">
                                    <span className="heading">Latest block</span>
                                    <p className="description">Ethereum</p>
                                </div>
                            </div>
                            <Table />
                        </div>
                    </Grid>
                    <Grid>
                        <CoinBlockSummary/>
                    </Grid>
                </Grid>
            </div>
            { isMobile && [<Bottombar />]}
        </div>
    )
}

export default Home;