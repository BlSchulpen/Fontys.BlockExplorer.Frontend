import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { FaChartPie, FaHome, FaMoneyBill } from 'react-icons/fa';
import bottombarStyle from './bottombar-style';
import "./bottombar.scss"

function Bottombar() {
    return (
        <div className='bottombar'> 
        <Box sx={{ pb: 3 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
          <BottomNavigation showLabels >
            <BottomNavigationAction  label="Home" icon={<FaHome className="icon" />} />
            <BottomNavigationAction  label="Prices" icon={<FaMoneyBill className="icon" />} />
            <BottomNavigationAction label="Charts" icon={<FaChartPie className="icon" />} />
          </BottomNavigation>
        </Paper>
      </Box>      
      </div>  
    );
};

export default Bottombar;