import styles from "./SecNav.module.css";
import { Link } from "react-router-dom";
import ProductNavigations from "../ProductNavigations";

const SecNav = () => {
  return (
    <div className={styles.secNav}>
      <Link className={styles.login}>Login</Link>
      {/* secondary navigations */}
    </div>
  );
};

export default SecNav;
