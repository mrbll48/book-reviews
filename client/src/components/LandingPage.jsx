import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import "./css/landingpage.css";

export default function LandingPage() {
  return (
    <div className="landing-top-div">
      <Header />
      <div>
        <h3>Welcome to my page</h3>
      </div>
    </div>
  );
}
