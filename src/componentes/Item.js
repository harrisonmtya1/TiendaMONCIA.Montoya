import React from "react";
import '../componentes/Item.css';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';



export default function Item({id,nombre, imagen , stock ,inicial ,precio}) {
    
    return (
        <div style={{display:"inline"}}>
            <div className="contenedorItems">
                <div className="contenedorItems__item">
                    <h2 >{nombre}</h2>
                    <img src={imagen} alt="img"/>
                    <ItemCount stock={stock} initial={inicial} />
                    <h3 >{precio}</h3>
                    <button type="submit" className="contenedorItems__item__boton">Comprar</button>
                    <button type="submit" className="contenedorItems__item__boton"><Link to={`/detalles/${id}`}>Detalle</Link></button>
                </div>
            </div>

        </div>
    );

}


