import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function BarraNavegacion() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">MONCIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Productos</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/1">Promociones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/2">Lo mas Nuevo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
};