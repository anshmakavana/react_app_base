import styles from "./SidebarInner.module.css";
import { useUi } from "../../../context/UiContext";

const SidebarInner = () => {
  const { activeSidebar } = useUi();

  return (
    <div>
      {activeSidebar === "secNav" ? "secNav" : ""}
      {activeSidebar === "productControl" ? "productControl" : ""}
    </div>
  );
};

export default SidebarInner;
