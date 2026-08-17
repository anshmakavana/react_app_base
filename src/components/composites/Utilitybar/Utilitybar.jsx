import styles from "./Utilitybar.module.css";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import listIcon from "../../../assets/icons/list_icon.svg";
import { useUi } from "../../../context/UiContext";
import ProductNavigations from "../ProductNavigations";
import Searchbar from "../Searchbar";

const Utilitybar = () => {
  const { setActiveSidebar, setIsSidebarOpen } = useUi();

  const openSidebar = () => {
    setActiveSidebar("secNav");
    setIsSidebarOpen(true);
  };

  return (
    <div className={styles.utilitybar}>
      <Searchbar className={styles.searchbar} />
      
      <div className={styles.navigations}>
        <Button onClick={openSidebar} className={styles.button}>
          <Image src={listIcon} />
        </Button>

        <ProductNavigations />
      </div>
    </div>
  );
};

export default Utilitybar;
