import styles from "./NavbarLinks.module.css";
import { NavLink } from "react-router-dom";

const navbarLinks = [
  {
    id: "/",
    label: "Home",
  },
  {
    id: "store",
    label: "Store",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const NavbarLinks = ({ className = "" }) => (
  <ul className={`${styles.navbarLinks} ${className}`}>
    {navbarLinks.map((each) => (
      <li key={each.id}>
        <NavLink
          to={each.id}
          className={({ isActive }) => (isActive ? styles.active : "")}
          end={each.id === "/"}
        >
          {each.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavbarLinks;
