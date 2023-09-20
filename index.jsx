import React from 'react';
import ReactDOM from "react-dom/client";
import BadgePlayground from "./components/Badge/BadgePlayground";
import BannerPlayground from "./components/Banner/BannerPlayground";
import CardPlayground from "./components/Card/CardPlayground";

function App() {
  return (
    <>
      <BadgePlayground />
      <BannerPlayground />
      <CardPlayground />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
