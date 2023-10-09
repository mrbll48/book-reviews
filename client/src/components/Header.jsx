import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Nav navbarScroll>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Reviews</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
