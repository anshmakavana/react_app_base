import styles from "./Searchbar.module.css";
import Input from "../../primitives/Input";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import searchIcon from "../../../assets/icons/search_icon_dark.svg";

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <Input type="search" placeholder="Search" />
      <Button>
        <Image src={searchIcon} />
      </Button>
    </div>
  );
};

export default Searchbar;
