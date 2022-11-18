import { Link } from "react-router-dom";

function SidebarMainCategory() {
    return (
        <div>
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
        </div>
    )
};

export default SidebarMainCategory;