import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './NavBar.css';



export default  function BarraNavegacion(){

  return(
<>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">MONCIA</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Lo nuevo</Nav.Link>
      <Nav.Link href="#pricing">Promociones</Nav.Link>
    </Nav>
    </Container>
    <div className="divShoppingCartIcon">
    <ShoppingCartIcon></ShoppingCartIcon><h3>1</h3>
    </div>
    
  </Navbar>
   
</>
  )};