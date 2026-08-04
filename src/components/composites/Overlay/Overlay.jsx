import styles from "./Overlay.module.css";
import { useUi } from "../../../context/UiContext";

const Overlay = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useUi();
  const isVisible = isDropdownOpen;

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.isVisible : ""}`}
      onClick={() => setIsDropdownOpen(false)}
    ></div>
  );
};

export default Overlay;
