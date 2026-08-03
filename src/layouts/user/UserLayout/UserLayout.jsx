import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Dropdown from "../Dropdown";
import styles from "./UserLayout.module.css";

const UserLayout = () => {
  return (
    <div className={styles.userLayout}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <Sidebar />

      <Dropdown />
    </div>
  );
};

export default UserLayout;
