import Testimonial from "../components/Testimonial";
import "../style.css";
import React from "react";
import testimonialImage from "../assets/testimonial.jpg";
import testimonialLogo from "../assets/testimonial_logo.svg";

export default {
  component: Testimonial,
};

const baseArgs = {
  args: {
    image: "with image",
    children: "",
    icon: "default icon",
  },
  argTypes: {
    image: {
      control: "radio",
      options: ["with image", "no image"],
      mapping: {
        "with image": testimonialImage,
        "no image": null,
      },
    },
    icon: {
      control: "radio",
      options: ["default icon", "custom icon"],
      mapping: {
        "custom icon": testimonialLogo,
        "default icon": null,
      },
    },
  },
};

export const TestimonialWithImage = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    backgroundColor: "#3d00c2",
    children: (
      <>
        {" "}
        <div
          style={{
            paddingTop: 24,
            paddingBottom: 24,
            fontSize: 24,
            fontStyle: "normal",
            fontFamily: "inherit",
            fontWeight: 500,
            color: "#FFF",
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </div>
        <div
          style={{
            color: "#FFF",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "inherit",
            lineHeight: "24px",
          }}
        >
          May Andersons
        </div>
        <div
          style={{
            color: "#FFF",
            fontSize: "16px",
            fontStyle: "normal",
            fontFamily: "inherit",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Workcation, CTO
        </div>
      </>
    ),
  },

  decorators: [
    (Story) => (
      <div
        style={{
          padding: 50,
          marginTop: 100,
          backgroundColor: "rgba(196,196,196,0.17)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const TestimonialWithoutImage = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    image: "no image",
    icon: "default icon",
    children: (
      <>
        {" "}
        <div
          style={{
            paddingTop: 24,
            paddingBottom: 24,
            fontSize: 24,
            fontStyle: "normal",
            fontFamily: "inherit",
            fontWeight: 500,
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </div>
        <div
          style={{
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "inherit",
            lineHeight: "24px",
          }}
        >
          May Andersons
        </div>
        <div
          style={{
            fontSize: "16px",
            fontStyle: "normal",
            fontFamily: "inherit",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Workcation, CTO
        </div>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 50,
          marginTop: 100,
          backgroundColor: "rgba(196,196,196,0.17)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
