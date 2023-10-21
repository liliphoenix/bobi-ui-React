import classnames from "classnames";
import React from "react";
import "./icon.less";

interface iconType {
  type: string;
  className: string;
}
// 在全局创建script标签
const scriptElem = document.createElement("script");
scriptElem.src = "//at.alicdn.com/t/c/font_3516870_5asowbf2uax.js";
document.body.appendChild(scriptElem);
const Icon: React.FC<iconType> = (props) => {
  const { type, className } = props;
  const classes = classnames("icon", className, {
    "icon-loading": type === "toutiao-loading1" ? 1 : 0
  });
  return (
    <>
      <div>
        <svg className={classes} aria-hidden="true">
          <use xlinkHref={`#${type}`} />
        </svg>
      </div>
    </>
  );
};
export default Icon;
