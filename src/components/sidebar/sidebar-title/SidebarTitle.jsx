import { Link } from "react-router-dom";

function SidebarTitle() {
    return (
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Block explorer</span>
            </Link>
            <hr />
        </div>
        );
    };

export default SidebarTitle;