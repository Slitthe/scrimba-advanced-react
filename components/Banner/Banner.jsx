import React from "react";
import classes from "./Banner.module.scss";
import classNames from "classnames";

import { AiFillCheckCircle, AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
// AiFillCheckCircle

const iconTypes = {
  neutral: <BsFillInfoCircleFill />,
  success: <AiFillCheckCircle />,
  error: <AiFillCloseCircle />,
  warning: <AiFillWarning />,
};

export default function Banner({ type = "neutral", title, description }) {
  const bannerClasses = classNames(
    classes.banner,
    classes[type],
    !description ? classes.singleLine : null
  );

  return (
    <div className={bannerClasses}>
      <div className={classes.titleIconWrapper}>
        <span className={classes.icon}>{iconTypes[type]}</span>
        <div className={classes.title}>{title}</div>
      </div>
      {description && <div className={classes.description}>{description}</div>}
    </div>
  );
}
