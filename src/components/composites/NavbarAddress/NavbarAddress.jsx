import styles from "./NavbarAddress.module.css";
import Button from "../../primitives/Button";
import Image from "../../primitives/Image";
import locationIcon from "../../../assets/icons/location_icon.svg";

const NavbarAddress = () => {
  return (
    <div className={styles.navbarAddress}>
      <Button>
        <p> 395010 </p>
        <Image src={locationIcon} />
      </Button>
    </div>
  );
};

export default NavbarAddress;
