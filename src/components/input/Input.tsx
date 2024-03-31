import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface InputType {
  type: "text";
  value: string;
  onChange: any;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
}: InputType) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
