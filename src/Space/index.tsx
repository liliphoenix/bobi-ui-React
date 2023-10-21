import classNames from "classnames";
import React, { useContext } from "react";
import { ProviderConfig } from "../globalConfig/config";
import Item from "./Item";
import { alignType } from "./SpaceTypes";
import "./style/index.less";

interface SpaceProps {
  children: React.ReactNode;
  align?: alignType;
}

const Space: React.FC<SpaceProps> = (props) => {
  const { children, align } = props;
  const { globalPrefix } = useContext(ProviderConfig);
  const prefix = `${globalPrefix}-space`;
  const classes = classNames(prefix, {
    [`${prefix}-${align}`]: align
  });
  return (
    <div className={classes}>
      <div></div>
      {children.map((child, index: number) => (
        <Item key={index}>{child}</Item>
      ))}
    </div>
  );
};

export default Space;
