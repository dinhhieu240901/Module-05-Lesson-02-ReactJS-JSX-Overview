import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
  root.render(<h4>Browser's details: {navigator.userAgent}</h4>);
};

setInterval(tick, 1000);
