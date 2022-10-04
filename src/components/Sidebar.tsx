import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBitcoincash } from 'react-icons/si';
import { Link } from "react-router-dom";

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
            <p className="title">Main</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
            <p className="title">Coins</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
              <FaBitcoin className="icon"  />
                <span>Bitcoin</span>
              </li>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <SiBitcoincash className="icon"  />
                <span>Bitcoin Cash</span>
              </li>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <FaEthereum className="icon" />
                <span>Ethereum</span>
              </li>
            </Link>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;