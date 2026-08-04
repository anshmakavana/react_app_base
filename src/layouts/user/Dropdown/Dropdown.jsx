import styles from "./Dropdown.module.css";
import DropdownInner from "../../../components/composites/DropdownInner";
import { useUi } from "../../../context/UiContext";
import Button from "../../../components/primitives/Button";
import Image from "../../../components/primitives/Image";
import crossIcon from "../../../assets/icons/cross_icon.svg";

const Dropdown = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useUi();

  return (
    <div
      className={`${styles.dropdown} ${isDropdownOpen ? styles.isOpen : ""}`}
    >
      <DropdownInner />
      <Button
        aria-label="close"
        className={styles.dropdownCloseBtn}
        onClick={() => setIsDropdownOpen(false)}
      >
        <Image src={crossIcon} />
      </Button>
    </div>
  );
};

export default Dropdown;
