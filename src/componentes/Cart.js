import '../componentes/Cart.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartWidget from '../componentes/CartWidget';
import { useState } from "react";

const Cart = () => {
  const [clase, setClase] = useState(["CartWidgetCerrado"])

    const cartWidget = () => {
        if (clase == "CartWidgetCerrado") {
            setClase("CartWidgetAbierto")
        } else {
            setClase("CartWidgetCerrado")
        }
    }


  return (
    <div className="divShoppingCartIcon">
      <ShoppingCartIcon onClick={cartWidget}></ShoppingCartIcon><h4>0</h4>
      <CartWidget clase={clase} cerrar={cartWidget}></CartWidget>
    </div>
  )

}

export default Cart;