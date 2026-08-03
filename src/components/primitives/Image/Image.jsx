import styles from "./Image.module.css";

const Image = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={className} {...props} />
);

export default Image;
