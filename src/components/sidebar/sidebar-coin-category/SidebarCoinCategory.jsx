import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import { BtcOrange, BchGreen, EthPurple } from '../../../colors'
import sidebarStyle from '../Sidebar-style';

function SidebarCoinCategory() {
    return (
      <List>
      <ListItem disablePadding>
        <ListItemButton to="/btc">
          <ListItemIcon>
            <FaBitcoin className="icon" color={BtcOrange} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Bitcoin" />
        </ListItemButton>
      </ListItem>
   
      <ListItem disablePadding>
        <ListItemButton to="/bch">
          <ListItemIcon>
          <SiBitcoincash className="icon" color={BchGreen} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Bitcoin cash" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton to="/eth">
          <ListItemIcon>
          <FaEthereum className="icon" color={EthPurple} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ style: sidebarStyle.main}} primary="Ethereum" />
        </ListItemButton>
      </ListItem>        
  </List>
    )
}

export default SidebarCoinCategory