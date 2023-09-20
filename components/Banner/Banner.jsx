import React from "react";
import styles from "./Banner.module.scss";
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
    styles.banner,
    styles[type],
    !description ? styles.singleLine : null
  );

  return (
    <div className={bannerClasses}>
      <div className={styles.titleIconWrapper}>
        <span className={styles.icon}>{iconTypes[type]}</span>
        <div className={styles.title}>{title}</div>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}
