import Badge from "../components/Badge";
import "../style.css";

export default {
  component: Badge,
};

const baseArgs = {
  args: {
    children: "Badge",
    color: "gray",
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"],
    },
    type: {
      control: "radio",
      options: ["square", "pill"],
    },
  },
};

export const Square = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    type: "square",
  },
};

export const Pill = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    type: "pill",
  },
};
