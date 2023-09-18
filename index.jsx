import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge";
import BadgePlayground from "./components/Badge/BadgePlayground";

function App() {
  return <BadgePlayground />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
