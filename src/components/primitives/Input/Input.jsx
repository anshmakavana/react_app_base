import styles from "./Input.module.css";

const Input = ({ type, placeholder = "", className, ...rest }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={className}
    {...rest}
  />
);

export default Input;