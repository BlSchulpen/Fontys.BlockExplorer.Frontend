import "./sidebar.scss";
import { FaBitcoin, FaChartPie, FaEthereum, FaHome, FaMoneyBill } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import { Link } from "react-router-dom";
import { BtcOrange, BchGreen, EthPurple } from '../../colors'
import SidebarTitle from './sidebar-title/SidebarTitle'; 
import SidebarMainCategory from "./sidebar-main-category/SidebarMainCategory";
import SidebarContent from "./sidebar-content/SidebarContent";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarTitle />
      <div className="center">
        <SidebarContent/>
      </div>
    </div>
  );
};

export default Sidebar;