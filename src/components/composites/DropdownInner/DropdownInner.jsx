import styles from "./DropdownInner.module.css";
import { useUi } from "../../../context/UiContext";

const DropdownInner = () => {
  const { activeDropdown } = useUi();

  return (
    <div className={styles.dropdownInner}>
      {activeDropdown === "mobileNav" ? "mobileNav" : ""}
      {activeDropdown === "action2" ? "action2" : ""}
      {activeDropdown === "action3" ? "action3" : ""}
    </div>
  );
};

export default DropdownInner;
