import "./sidebar-title.scss";
import { Link } from "react-router-dom";

function SidebarTitle() {
    return (
//     <Toolbar>
//     <Box
//         component="img"
//         sx={{
//         height: 0,
//         width:0
//         }}
//         alt="Your logo."
//         src= {"../../../../resources/blockexplorer.jpg"}/>
// </Toolbar>
        <div className="sidebar-title">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Block explorer</span>
            </Link>
        </div>
        );
    };

export default SidebarTitle;