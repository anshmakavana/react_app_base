import styles from "./Navbar.module.css";
import { useUi } from "../../../context/UiContext";
import Logo from "../Logo";
import NavbarAddress from "../NavbarAddress";
import NavbarActions from "../NavbarActions";
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

      <NavbarAddress />

      <Searchbar className={styles.searchbar}/>

      <NavbarActions />
    </div>
  );
};

export default Navbar;
