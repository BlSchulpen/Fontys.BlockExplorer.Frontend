import "./sidebar.scss";
import SidebarTitle from './sidebar-title/SidebarTitle';
import SidebarMainCategory from "./sidebar-main-category/SidebarMainCategory";
import SidebarCoinCategory from "./sidebar-coin-category/SidebarCoinCategory";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarTitle />
      <ul >
        <SidebarMainCategory />
        <hr />
        <SidebarCoinCategory />
      </ul>
    </div>
  );
};

export default Sidebar;