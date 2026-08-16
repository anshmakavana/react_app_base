import styles from "./SecNav.module.css";
import { Link } from "react-router-dom";

const secNav = [
  {
    id: "nav1",
    title: "nav1",
  },
  {
    id: "nav2",
    title: "nav2",
  },
  {
    id: "nav3",
    title: "nav3",
  },
  {
    id: "nav4",
    title: "nav4",
  },
  {
    id: "nav5",
    title: "nav5",
  },
  {
    id: "nav6",
    title: "nav6",
  },
  {
    id: "nav7",
    title: "nav7",
  },
  {
    id: "nav8",
    title: "nav8",
  },
  {
    id: "nav9",
    title: "nav9",
  },
  {
    id: "nav10",
    title: "nav10",
  },
  {
    id: "nav11",
    title: "nav11",
  },
];

const SecNav = () => {
  return (
    <ul className={styles.secNav}>
      {secNav.map((each) => (
        <li>
          <Link>{each.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SecNav;
