import Sidebar from "../components/sidebar/Sidebar";
import Table from "../components/table/Table";
import "./home.scss";
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Grid container spacing={3}>
                    <Grid xs={4}>
                        <div className="listContainer">
                            <div className="listTitle">Latest Bitcoin blocks</div>
                            <Table />
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <div className="listContainer">
                            <div className="listTitle">Latest Bitcoin cash blocks</div>
                            <Table />
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <div className="listContainer">
                            <div className="listTitle">Latest ethereum blocks</div>
                            <Table />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;