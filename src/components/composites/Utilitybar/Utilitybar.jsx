import styles from "./Utilitybar.module.css";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import listIcon from "../../../assets/icons/list_icon.svg";
import { useUi } from "../../../context/UiContext";

const Utilitybar = () => {
  const { setActiveSidebar, setIsSidebarOpen } = useUi();

  const openSidebar = () => {
    setActiveSidebar("secNav");
    setIsSidebarOpen(true);
  };

  return (
    <div className={styles.utilitybar}>
      <Button onClick={openSidebar}>
        <Image src={listIcon} />
        <p>All</p>
      </Button>
    </div>
  );
};

export default Utilitybar;
