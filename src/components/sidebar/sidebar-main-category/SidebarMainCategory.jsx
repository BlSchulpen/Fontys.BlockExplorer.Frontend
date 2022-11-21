import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaChartPie, FaHome, FaMoneyBill } from 'react-icons/fa';
import sidebarStyle from '../sidebar-style';
import "./sidebar-main-category.scss";

function SidebarMainCategory() {
    return (
      <div className='main-list-items'>
        <List>
          <ListItem disablePadding>
            <ListItemButton to="/home">
              <ListItemIcon>
                <FaHome className="icon" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Home" />
            </ListItemButton>
          </ListItem>
       
          <ListItem disablePadding>
            <ListItemButton to="/prices">
              <ListItemIcon>
                <FaMoneyBill className="icon" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Prices" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton to="/charts">
              <ListItemIcon>
                <FaChartPie className="icon" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Charts" />
            </ListItemButton>
          </ListItem>        
      </List>
      </div>
    )
};

export default SidebarMainCategory;