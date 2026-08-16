import styles from "./NavbarActions.module.css";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import heartIcon from "../../../assets/icons/heart_icon.svg";
import cartIcon from "../../../assets/icons/cart_icon.svg";
import { useUi } from "../../../context/UiContext";

const navbarActions = [
  {
    id: "like",
    src: heartIcon,
  },
  {
    id: "cart",
    src: cartIcon,
  },
];

const NavbarActions = () => {
  const { setActiveDropdown, setIsDropdownOpen } = useUi();

  const openDropdown = (id) => {
    setActiveDropdown(id);
    setIsDropdownOpen(true);
  };

  return (
    <ul className={styles.navbarActions}>
      {navbarActions.map((each) => (
        <li key={each.id}>
          <Button
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => openDropdown(each.id)}
          >
            <img src={each.src} alt={each.id} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarActions;
