import '../componentes/ItemDetail.css';
import ItemCount from '../componentes/ItemCount'
import { useParams } from 'react-router';
import React, {useState} from 'react';
import {useContext} from 'react';
import CartContext from '../componentes/CartContext'

const ItemDetail = (props) => {

    const {id}= useParams();
    const [cantidad, setCantidad]= useState(1);
    const {productos,añadirProducto}=useContext(CartContext);

    if(props.data.length !==0 &&  props.data.length !== undefined){
    var item = (props.data).find(elemento => elemento.id == id);}
    
    

    const sumar=()=>{
        (cantidad===item.stock? alert("Cantidad igual a stock") : setCantidad (cantidad+1));
        
    };
    const restar=()=>{
        (cantidad===item.inicial? alert("Cantidad igual a inicial"): setCantidad (cantidad-1));
    };

    const comprar=()=>{
        item.cantidad=cantidad;
        añadirProducto(item)
        console.log(productos);
     }

    return (
        <div>
            {
            props.data.length !==0 &&  props.data.length !== undefined?
            
                (<div className="contenedorItems">

                    <div className="contenedorItems__item">
                        <h2 >{item.nombre}</h2>
                        <img src={item.imagen} alt="img" />
                        <h3 >{props.precio}</h3>
                        <ItemCount cantidad={cantidad} sumar={sumar} restar={restar}/>
                        <button type="submit" className="contenedorItems__item__boton" onClick={comprar}>Comprar</button>
                        <p>{`${item.detalles} Este es el Detalle`}</p>
                    </div>
                </div>) : (
            
                <div>
                    <p>Cargando....</p>
                </div>
                )
            }

        </div>
    )

}

export default ItemDetail;