import React from "react";
import classes from "./Card.module.scss";
import classNames from "classnames";

export default function Card({ children, icon, iconBackgroundColor }) {
  const cardClasses = classNames(classes.card, icon ? classes.withIcon : null);
  return (
    <div className={cardClasses}>
      {children}
      {icon && (
        <div style={{ backgroundColor: iconBackgroundColor }} className={classes.icon}>
          {icon}
        </div>
      )}
    </div>
  );
}
