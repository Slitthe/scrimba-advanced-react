import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge";
import BadgePlayground from "./components/Badge/BadgePlayground";
import BannerPlayground from "./components/Banner/BannerPlayground";

function App() {
  return (
    <>
      <BadgePlayground />
      <BannerPlayground />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
