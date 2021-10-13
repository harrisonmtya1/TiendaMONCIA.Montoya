import './App.css';
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import RouterApp from './componentes/RouterApp';
import Cart from './componentes/Cart';
import { CartProvider } from './componentes/CartContext';
// import CartWidget from './componentes/CartWidget';



function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <CartProvider>
        <Cart />
        <RouterApp />
      </CartProvider>
      {/* <CartWidget></CartWidget> */}
    </div>
  );
}

export default App;
