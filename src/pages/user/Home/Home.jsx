import HomeInner from "../../../components/composites/HomeInner";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeInner />
    </div>
  );
};

export default Home;
