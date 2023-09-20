import React from "react";
import Card from "./Card";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function CardPlayground() {
  return (
    <div>
      <h2>Card</h2>
      <div style={{ marginLeft: 16 }}>
        <h2 style={{ fontWeight: 500 }}>With Icon</h2>
        <Card icon={<AiOutlineCloudUpload />}>
          <div
            style={{
              fontWeight: 500,
              textAlign: "center",
              marginBottom: 20,
              color: "#111827",
              fontSize: 18,
            }}
          >
            Easy Deployment
          </div>
          <div style={{ fontWeight: 400, color: "#6B7280", textAlign: "center", fontSize: 16 }}>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis.
          </div>
        </Card>
      </div>

      <div style={{ marginLeft: 16 }}>
        <h2 style={{ fontWeight: 500 }}>With Custom Color Icon</h2>
        <Card icon={<AiOutlineCloudUpload />} iconBackgroundColor="pink">
          <div
            style={{
              fontWeight: 500,
              textAlign: "center",
              marginBottom: 20,
              color: "#111827",
              fontSize: 18,
            }}
          >
            Easy Deployment
          </div>
          <div style={{ fontWeight: 400, color: "#6B7280", textAlign: "center", fontSize: 16 }}>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis.
          </div>
        </Card>
      </div>

      <div style={{ marginLeft: 16 }}>
        <h2 style={{ fontWeight: 500 }}>With No Icon</h2>
        <Card>
          <div
            style={{
              fontWeight: 500,
              textAlign: "center",
              marginBottom: 20,
              color: "#111827",
              fontSize: 18,
            }}
          >
            Easy Deployment
          </div>
          <div style={{ fontWeight: 400, color: "#6B7280", textAlign: "center", fontSize: 16 }}>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis.
          </div>
        </Card>
      </div>
    </div>
  );
}
