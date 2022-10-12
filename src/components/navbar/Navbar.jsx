import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="home">IT MEDIA</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
