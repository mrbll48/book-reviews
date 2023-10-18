import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./css/navbar.css";

export default function Header() {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav className="me-auto navs">
          <Nav.Link className="navlinks">Home</Nav.Link>
          <Nav.Link className="navlinks">Book Reviews</Nav.Link>
          <Nav.Link className="navlinks">Recommended Reading</Nav.Link>
          <Nav.Link className="navlinks">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
