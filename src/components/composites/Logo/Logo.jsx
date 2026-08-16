import styles from "./Logo.module.css";
import Image from "../../primitives/Image";
import logoBlack from "../../../assets/others/logos/wannatie_logo_black.png";
import logoWhite from "../../../assets/others/logos/wannatie_logo_white.png";
import namedLogoBlack from "../../../assets/others/logos/wannatie_named_logo_black.png";
import namedLogoWhite from "../../../assets/others/logos/wannatie_named_logo_white.png";

const Logo = ({ size = "md", alt = "" }) => {
  const sizeClass = styles[size] || styles.md;  
  
  return (
    <div className={`${styles.logo} ${sizeClass}`}>
      <Image
        src={
          alt === "logo_black"
            ? logoBlack
            : alt === "logo_white"
              ? logoWhite
              : alt === "named-logo_black"
                ? namedLogoBlack
                : namedLogoWhite
        }
        alt={alt}
      />
    </div>
  );
};

export default Logo;
