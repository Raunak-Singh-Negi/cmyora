import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "HOME", path: "/" },
  { label: "CATALOGUE", path: "/catalogue" },
  { label: "ABOUT US", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

function SideMenu() {
  return (
    <nav className="side-menu">
      {menuItems.map((item, index) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="side-menu-item"
          style={{ "--menu-index": index }}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default SideMenu;