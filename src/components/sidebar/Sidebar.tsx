import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { FaBitcoin, FaChartArea, FaChartLine, FaChartPie, FaEthereum, FaHome, FaLine, FaMoneyBill } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import { Link } from "react-router-dom";
import { BtcOrange, BchGreen, EthPurple } from '../../colors'




const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Block explorer</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <FaHome className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/prices" style={{ textDecoration: "none" }}>
            <li>
              <FaMoneyBill className="icon" />
              <span>Prices</span>
            </li>
          </Link>
          <Link to="/charts" style={{ textDecoration: "none" }}>
            <li>
              <FaChartPie className="icon" />
              <span>Charts</span>
            </li>
          </Link>
          <p className="title">Coins</p>
          <Link to="/btc" style={{ textDecoration: "none" }}>
            <li>
              <FaBitcoin className="icon" color={BtcOrange} />
              <span>Bitcoin</span>
            </li>
          </Link>
          <Link to="/bch" style={{ textDecoration: "none" }}>
            <li>
              <SiBitcoincash className="icon" color={BchGreen} />
              <span>Bitcoin Cash</span>
            </li>
          </Link>
          <Link to="/eth" style={{ textDecoration: "none" }}>
            <li>
              <FaEthereum className="icon" color={EthPurple} />
              <span>Ethereum</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;