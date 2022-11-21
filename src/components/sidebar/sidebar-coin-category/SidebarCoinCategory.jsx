import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import { BtcOrange, BchGreen, EthPurple } from '../../../colors'

function SidebarCoinCategory() {
    return (
      <List>
      <ListItem disablePadding>
        <ListItemButton to="/btc">
          <ListItemIcon>
            <FaBitcoin className="icon" color={BtcOrange} />
          </ListItemIcon>
          <ListItemText primary="Bitcoin" />
        </ListItemButton>
      </ListItem>
   
      <ListItem disablePadding>
        <ListItemButton to="/bch">
          <ListItemIcon>
          <SiBitcoincash className="icon" color={BchGreen} />
          </ListItemIcon>
          <ListItemText primary="Bitcoin cash" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton to="/eth">
          <ListItemIcon>
          <FaEthereum className="icon" color={EthPurple} />
          </ListItemIcon>
          <ListItemText primary="Ethereum" />
        </ListItemButton>
      </ListItem>        
  </List>
    )
}

export default SidebarCoinCategory