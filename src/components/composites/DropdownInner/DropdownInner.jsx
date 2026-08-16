import styles from "./DropdownInner.module.css";
import { useUi } from "../../../context/UiContext";

const DropdownInner = () => {
  const { activeDropdown } = useUi();

  return (
    <div className={styles.dropdownInner}>
      {activeDropdown === "mobileNav" ? "mobileNav" : ""}
      {activeDropdown === "like" ? "like" : ""}
      {activeDropdown === "cart" ? "cart" : ""}
    </div>
  );
};

export default DropdownInner;
