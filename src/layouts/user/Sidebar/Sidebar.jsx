import styles from "./Sidebar.module.css";
import SidebarInner from "../../../components/composites/SidebarInner";
import Button from "../../../components/primitives/Button";
import Image from "../../../components/primitives/Image";
import crossIcon from "../../../assets/icons/cross_icon.svg";
import { useUi } from "../../../context/UiContext";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useUi();

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.isOpen : ""}`}>
      <SidebarInner />
      <Button aria-label="close" onClick={() => setIsSidebarOpen(false)}>
        <Image src={crossIcon} />
      </Button>
    </div>
  );
};

export default Sidebar;
