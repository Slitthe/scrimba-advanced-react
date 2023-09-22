import React from "react";
import ReactDOM from "react-dom/client";
import Testimonial from "./components/Testimonial";
import testimonialImage from "./assets/testimonial.jpg";

function App() {
  return (
    <div style={{ padding: 48, marginTop: 200 }}>
      <Testimonial backgroundColor="#2545B8" image={testimonialImage}>
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
      </Testimonial>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
