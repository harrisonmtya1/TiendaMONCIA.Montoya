
import './CartWidget.css';
import CartContext from './CartContext';
import {usecontext} from 'react'



export default function CardWidget({clase,cerrar}) {
    
console.log(clase)

    return (
        <div className={`${clase}`}>
               <div><p>Carrito de Compras</p><h1 onClick={cerrar} claseName={"cerrar"}>X</h1></div>
              
        </div>
    );


}