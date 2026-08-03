import HeaderInner from "../../../components/composites/HeaderInner";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderInner />
    </div>
  );
};

export default Header;
