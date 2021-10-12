import React, { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    const añadirProducto = (producto) => {
        if(productos.length !==0){
        var encontrado= productos.find(elemento=> elemento.id==producto.id);
        (encontrado ==undefined) ? (productos.push(producto)):(alert("Ya has añadido este producto"));
        
    }else{
            productos.push(producto);
            
        }
    }

    const eliminarProducto=(id)=>{
         let posicion;
          for(let[index,elemento] of productos.entries()){
           if(elemento.id==id){
               posicion=index;
           }
          }
          productos.slice(posicion,1);
    }

    const vaciarCarro=()=>{
        productos=[]
    }

    const data = {
        productos,
        añadirProducto,
        eliminarProducto,
        vaciarCarro,
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider }
export default CartContext;