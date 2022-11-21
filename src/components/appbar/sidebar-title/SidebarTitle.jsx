import { Link } from "react-router-dom";
import "./sidebar-title.scss";

function SidebarTitle() {
    return (
        <div className="sidebar-title">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Block explorer</span>
            </Link>
        </div>
        );
    };

export default SidebarTitle;