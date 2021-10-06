import React from "react";
import '../componentes/Item.css';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import  {useState} from 'react';


export default function Item({id,nombre, imagen , stock ,inicial ,precio}) {

    const [cantidad, setCantidad]= useState(inicial);

    const sumar=()=>{
        (cantidad===stock? alert("Cantidad igual a stock") : setCantidad (cantidad+1));
        
    };
    const restar=()=>{
        (cantidad===inicial? alert("Cantidad igual a inicial"): setCantidad (cantidad-1));
    };
    
    return (
        <div style={{display:"inline"}}>
            <div className="contenedorItems">
                <div className="contenedorItems__item">
                    <h2 >{nombre}</h2>
                    <img src={imagen} alt="img"/>
                    <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} />
                    <h3 >{precio}</h3>
                    <button type="submit" className="contenedorItems__item__boton"><Link to={"/cart"}>Comprar</Link></button>
                    <button type="submit" className="contenedorItems__item__boton"><Link to={`/detalles/${id}`}>Detalle</Link></button>
                </div>
            </div>

        </div>
    );

}


