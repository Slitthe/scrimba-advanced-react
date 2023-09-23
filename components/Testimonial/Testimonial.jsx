import React from "react";
import classes from "./Testimonial.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import classNames from "classnames";
import testimonialBg from "../../assets/testimonial_bg.svg";

function Testimonial({ backgroundColor, children, image, icon }) {
  return (
    <div
      style={{
        backgroundColor,
        backgroundImage: !backgroundColor ? `url(${testimonialBg})` : null,
      }}
      className={classNames(
        classes.testimonial,
        image ? classes.withPicture : null
      )}
    >
      {image && (
        <div className={classes.image}>
          <img src={image} />
        </div>
      )}

      <div className={classes.content}>
        {!icon && (
          <div className={classes.icon}>
            <FaQuoteLeft />
          </div>
        )}
        {icon && typeof icon === "string" && (
          <div className={classes.icon}>
            <img src={icon} />
          </div>
        )}
        {icon && typeof icon === "object" && (
          <div className={classes.icon}>{icon}</div>
        )}

        {children}
      </div>
    </div>
  );
}

export default Testimonial;
