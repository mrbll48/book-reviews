import { Link } from "react-router-dom";
import Header from "./Header.jsx";

export default function LandingPage() {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <Header />
      <h1>test</h1>
    </div>
  );
}
