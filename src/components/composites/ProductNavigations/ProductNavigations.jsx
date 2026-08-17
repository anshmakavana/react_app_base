import { Activity } from "react";
import styles from "./ProductNavigations.module.css";
import { NavLink } from "react-router-dom";

const productNavigations = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "categories",
    title: "Categories",
  },
  {
    id: "rooms",
    title: "Rooms",
  },
  {
    id: "style",
    title: "Styles",
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

const ProductNavigations = ({ className = "" }) => {
  return (
    <ul className={`${styles.productNavigations} ${className}`}>
      {productNavigations.map((each) => (
        <li key={each.id}>
          <NavLink
            to={each.id}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            end={each.id === "/"}
          >
            {each.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProductNavigations;
