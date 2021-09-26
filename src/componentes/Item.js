import React from "react";
import '../componentes/Item.css';
import ItemCount from "./ItemCount";


export default function Item({nombre, imagen , stock ,inicial ,precio}) {

    return (
        <div>
            <div className="contenedorItems">
                <div className="contenedorItems__item">
                    <h2 >{nombre}</h2>
                    <img src={imagen} alt="img"/>
                    <ItemCount stock={stock} initial={inicial} />
                    <h3 >{precio}</h3>
                    <button type="submit" className="contenedorItems__item__boton">Comprar</button>
                    <button type="submit" className="contenedorItems__item__boton">Detalle</button>
                </div>
            </div>

        </div>
    );

}


