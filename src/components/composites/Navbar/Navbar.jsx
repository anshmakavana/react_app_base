import styles from "./Navbar.module.css";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import menuIcon from "../../../assets/icons/menu_icon.svg";
import { useUi } from "../../../context/UiContext";
import Logo from "../Logo";
import NavbarActions from "../NavbarActions";
import NavbarLinks from "../NavbarLinks";
import Searchbar from "../Searchbar";

const Navbar = () => {
  const { setActiveDropdown, setIsDropdownOpen } = useUi();

  const openDropdown = () => {
    setActiveDropdown("mobileNav");
    setIsDropdownOpen(true);
  };

  return (
    <div className={styles.navbar}>
      <Logo size="md" alt="logo_black" />

      <NavbarLinks className={styles.navbarLinks} />

      <Searchbar />

      <NavbarActions />

      <Button
        aria-label="menu"
        className={styles.navbarMenu}
        onClick={openDropdown}
      >
        <Image src={menuIcon} alt="menu" />
      </Button>
    </div>
  );
};

export default Navbar;
