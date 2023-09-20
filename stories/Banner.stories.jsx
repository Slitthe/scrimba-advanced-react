import Banner from "../components/Banner/index";
import "../style.css";

export default {
  component: Banner,
};

const baseArgs = {
  args: {
    type: "neutral",
    title: "Title",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["neutral", "success", "error", "warning"],
    },
  },
};

export const Singleline = {
  ...baseArgs,
};

export const MultiLine = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  },
};
