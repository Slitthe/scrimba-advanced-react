import { AiOutlineCloudUpload } from "react-icons/ai";
import CardComponent from "../components/Card";
import "../style.css";

export default {
  component: CardComponent,
  render: ({ children, icon, iconBackgroundColor }) => {
    return (
      <div style={{ marginTop: 32 }}>
        <CardComponent
          icon={icon ? <AiOutlineCloudUpload /> : null}
          iconBackgroundColor={iconBackgroundColor}
        >
          <div style={{ fontWeight: 400, color: "#6B7280", textAlign: "center", fontSize: 16 }}>
            {children}
          </div>
        </CardComponent>
      </div>
    );
  },
};

const baseArgs = {
  args: { children: "Content" },
};

export const Card = {
  ...baseArgs,
  args: {
    ...baseArgs.args,
    icon: true,
    iconBackgroundColor: "#43a6b0",
  },
};
