import Navbar from "../Navbar";
import Utilitybar from "../Utilitybar";
import styles from "./HeaderInner.module.css";

const HeaderInner = () => {
  return (
    <div className={styles.headerInner}>
      <Navbar />
      <Utilitybar />
    </div>
  );
};

export default HeaderInner;
