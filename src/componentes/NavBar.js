import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CardWidget from '../componentes/CartWidget';
import {Link} from 'react-router-dom';


export default function BarraNavegacion() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">MONCIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Productos</Nav.Link>
            <Nav.Link href="/detalles">Detalles</Nav.Link>
          </Nav>
        </Container>
        <CardWidget />
      </Navbar>

    </>
  )
};