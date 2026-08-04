import styles from "./DropdownInner.module.css";
import { useUi } from "../../../context/UiContext";

const DropdownInner = () => {
  const { activeDropdown } = useUi();

  return (
    <div className={styles.dropdownInner}>
      {activeDropdown === "mobileNav" ? "mobileNav" : ""}
    </div>
  );
};

export default DropdownInner;
