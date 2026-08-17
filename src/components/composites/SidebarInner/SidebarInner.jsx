import styles from "./SidebarInner.module.css";
import { Link } from "react-router-dom";
import { useUi } from "../../../context/UiContext";
import SecNav from "../SecNav";

const SidebarInner = () => {
  const { activeSidebar } = useUi();

  return (
    <div className={styles.sidebarInner}>
      {activeSidebar === "secNav" ? <SecNav /> : ""}
      {activeSidebar === "productControl" ? "productControl" : ""}
    </div>
  );
};

export default SidebarInner;
