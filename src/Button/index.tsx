import cs from "classnames";
import React, { ReactNode, useCallback, useContext } from "react";
import { ProviderConfig } from "../globalConfig/config";
import { ButtonSize, ButtonType } from "./ButtonTypes";
import "./style/index.less";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  classname?: string;
  type?: ButtonType;
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    classname,
    type = "default",
    children,
    icon,
    disabled,
    size = "medium"
  } = props;
  // 引入全局config
  const { globalPrefix } = useContext(ProviderConfig);
  const prefix = `${globalPrefix}-btn`;
  const classes = cs(
    prefix,
    {
      [`${prefix}-${type}`]: type,
      [`${prefix}-${type}-disabled`]: disabled,
      [`${prefix}-${size}`]: size
    },
    classname
  );
  const handleClick = useCallback(() => {
    // if(!disabled){
    //   // 阻止鼠标默认事件
    //   return
    // }
    console.log(props);
  }, []);
  return (
    <button className={classes} disabled={disabled} onClick={handleClick}>
      {children}
      {icon}
      {disabled}
    </button>
  );
};
export default Button;
