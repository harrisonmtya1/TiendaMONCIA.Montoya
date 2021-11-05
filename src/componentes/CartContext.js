import React, { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    const añadirProducto = (producto) => {
        if(productos.length !==0){
        var encontrado= productos.find(elemento=> elemento.id==producto.id);
        if(encontrado ===undefined) {
            productos.push(producto);
            setProductos([...productos]);
        }else{
            alert("Ya has añadido este producto")}
        
    }else{
            productos.push(producto);
            setProductos([...productos]);
            
        }
    }

    const eliminarProducto=(id)=>{
        console.log(productos)
         let posicion;
          for(let[index,elemento] of productos.entries()){
           if(elemento.id==id){
               posicion=index;
               console.log(posicion)
           }
          }
        productos.splice(posicion,1);
        console.log(productos)
        setProductos([...productos])
    }

    const vaciarCarro=()=>{
        setProductos([])
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