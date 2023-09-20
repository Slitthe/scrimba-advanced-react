import React from "react";
import Banner from "./Banner";

export default function BannerPlayground() {
  return (
    <>
      <h2>Banner</h2>

      <div style={{ marginLeft: 16 }}>
        <h2 style={{ fontWeight: 400 }}>Single Line</h2>

        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner type="neutral" title="Update available" />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner type="error" title="There is a problem with your application" />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner type="warning" title="Attention" />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner type="success" title="Congratulations!" />
        </div>
      </div>

      <div style={{ marginLeft: 16 }}>
        <h2 style={{ fontWeight: 400 }}>Multi Line</h2>

        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner
            type="neutral"
            title="Update available"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner
            type="error"
            title="There is a problem with your application"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner
            type="warning"
            title="Attention"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Banner
            type="success"
            title="Congratulations!"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
        </div>
      </div>
    </>
  );
}
