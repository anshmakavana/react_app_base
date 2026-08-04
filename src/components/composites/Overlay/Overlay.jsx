import styles from "./Overlay.module.css";
import { useUi } from "../../../context/UiContext";

const Overlay = () => {
  const { isDropdownOpen, isSidebarOpen, closeAllPanels } = useUi();
  const isVisible = isDropdownOpen || isSidebarOpen;

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.isVisible : ""}`}
      onClick={() => closeAllPanels(false)}
    ></div>
  );
};

export default Overlay;
