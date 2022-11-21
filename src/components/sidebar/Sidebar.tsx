import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import SidebarTitle from "./sidebar-title/SidebarTitle";
import SidebarMainCategory from "./sidebar-main-category/SidebarMainCategory";
import SidebarCoinCategory from "./sidebar-coin-category/SidebarCoinCategory";
import "./sidebar.scss";

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