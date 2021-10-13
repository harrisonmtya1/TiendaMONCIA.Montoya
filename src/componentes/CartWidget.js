
import './CartWidget.css';
import CartContext from './CartContext';
import {useContext} from 'react'



export default function CardWidget({clase,cerrar}) {

    const {productos, añadirProducto, eliminarProducto, vaciarCarro}=useContext(CartContext);
    console.log(productos);
    


    return (
        <div className={`${clase}`}>
               <div className={"divTitulo"}><p>Carrito de Compras</p><h1 onClick={cerrar} className={"cerrar"}>X</h1></div>
            {productos.map((producto) =>{
                return(
                    <div className={"contenedorItem"}>
                        
                        <div><img src={producto.imagen}></img></div>
                        <div><h4>{producto.nombre}</h4>
                        <p>{producto.detalles}</p>
                        <p>Cantidad: {`${producto.cantidad}`}</p><h4>{producto.precio}</h4></div>
                        
                    </div>
                )
            })}   
              
        </div>
    );


}