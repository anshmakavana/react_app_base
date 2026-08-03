import styles from './Button.module.css'

const Button = ({ type = "button", children = "", className = "", ...props }) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
