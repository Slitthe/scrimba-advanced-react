import Badge from "../components/Badge";
import "../style.css";

export default {
  component: Badge,
};

const baseArgs = {
  args: {
    children: "Badge",
    color: "blue",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"],
    },
    type: {
      control: "select",
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
