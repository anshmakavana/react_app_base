import Navbar from "../Navbar";
import styles from "./HeaderInner.module.css";

const HeaderInner = () => {
  return (
    <div className={styles.headerInner}>
      <Navbar />
    </div>
  );
};

export default HeaderInner;
