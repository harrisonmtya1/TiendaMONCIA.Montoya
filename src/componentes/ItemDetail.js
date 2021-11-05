import '../componentes/ItemDetail.css';
import ItemCount from '../componentes/ItemCount'

import React, {useState} from 'react';
import {useContext} from 'react';
import CartContext from '../componentes/CartContext'

const ItemDetail = ({data}) => {

    const item=data[0];
   
    const [cantidad, setCantidad]= useState(1);
    const {añadirProducto}=useContext(CartContext);

    
    
    

    const sumar=()=>{
        (cantidad===item.stock? alert("Cantidad igual a stock") : setCantidad (cantidad+1));
        
    };
    const restar=()=>{
        (cantidad===item.inicial? alert("Cantidad igual a inicial"): setCantidad (cantidad-1));
    };

    const comprar=()=>{
        item.cantidad=cantidad;
        añadirProducto(item)
        
     }

    return (
        <div>
            
            
                <div className="contenedorItems">

                    <div className="contenedorItems__item">
                        <h2 >{item.nombre}</h2>
                        <img src={item.imagen} alt="img" />
                        <h3 >{`Precio: $ ${item.precio}`}</h3>
                        <ItemCount cantidad={cantidad} sumar={sumar} restar={restar}/>
                        <button type="submit" className="contenedorItems__item__boton" onClick={comprar}>Comprar</button>
                        <p>{`${item.detalles}`}</p>
                    </div>
                </div>
            

        </div>
    )

}

export default ItemDetail;