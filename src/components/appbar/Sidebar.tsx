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
import SidebarTitle from "../sidebar/sidebar-title/SidebarTitle";
import SidebarMainCategory from "./sidebar-main-category/SidebarMainCategory";
import SidebarCoinCategory from "./sidebar-coin-category/SidebarCoinCategory";

const drawerWidth = 240;


function Sidebar() {
    return (
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <SidebarTitle/>
        <Box sx={{ overflow: 'auto' }}>
          <SidebarMainCategory/>
          <Divider />
          <SidebarCoinCategory/>
        </Box>
      </Drawer>
    );
  };
  
  export default Sidebar;