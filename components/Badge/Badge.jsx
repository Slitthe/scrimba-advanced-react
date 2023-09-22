import React from "react";
import classes from "./Badge.module.scss";
import classNames from "classnames";

export default function Badge({ children, type = "square", color = "" }) {
  let badgeClassNames = [
    classes.badge,
    type === "pill" ? classes.rounded : null,
    color ? classes[color] : null,
  ];


  return <span className={classNames(badgeClassNames)}>{children}</span>;
}
