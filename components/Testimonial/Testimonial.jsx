import React from "react";
import classes from "./Testimonial.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial({ backgroundColor, children, image }) {
  return (
    <div style={{ backgroundColor }} className={classes.testimonial}>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <div className={classes.content}>
        <span className={classes.icon}>
          <FaQuoteLeft />
        </span>

        {children}
      </div>
    </div>
  );
}

export default Testimonial;
