import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import { FaChartPie, FaHome, FaMoneyBill } from 'react-icons/fa';
import "./sidebar-main-category.scss";

function SidebarMainCategory() {
    return (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaHome className="icon" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
       
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaMoneyBill className="icon" />
              </ListItemIcon>
              <ListItemText primary="Prices" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaChartPie className="icon" />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItemButton>
          </ListItem>        
      </List>
    )
};

export default SidebarMainCategory;