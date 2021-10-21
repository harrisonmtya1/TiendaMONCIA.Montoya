import '../componentes/Cart.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartWidget from '../componentes/CartWidget';
import { useState } from "react";
import { useContext } from 'react';
import CartContext from '../componentes/CartContext';

const Cart = () => {
  const [clase, setClase] = useState(["CartWidgetCerrado"]);
  const { productos } = useContext(CartContext);

  const cartWidget = () => {
    if (clase === "CartWidgetCerrado") {
      setClase("CartWidgetAbierto")
    } else {
      setClase("CartWidgetCerrado")
    }
  }

  const cantidadProductos = () => {
    var cantidad=0;
    productos.map((producto) => {
      cantidad = cantidad + producto.cantidad;
    })
    return cantidad;
    
  }

  

  return (
    <div className="divShoppingCartIcon">
      <ShoppingCartIcon onClick={cartWidget}></ShoppingCartIcon><h4>{cantidadProductos()}</h4>
      <CartWidget clase={clase} cerrar={cartWidget}></CartWidget>
    </div>
  )

}

export default Cart;