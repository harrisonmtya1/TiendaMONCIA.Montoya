import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { NavDropdown } from 'react-bootstrap';



export default function BarraNavegacion() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">MONCIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Productos</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/1">Promociones</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/2">Lo mas Nuevo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
};