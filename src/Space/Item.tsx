import classNames from "classnames";
import React, { useContext } from "react";
import { ProviderConfig } from "../globalConfig/config";
import "./style/item.less";

interface SpaceItemProps {
  children?: React.ReactNode;
}

function Item(props: SpaceItemProps) {
  const { children } = props;
  const { globalPrefix } = useContext(ProviderConfig);
  const prefix = `${globalPrefix}-spaceItem`;
  const classes = classNames(prefix);
  return <div className={classes}>{children}</div>;
}
export default Item;
