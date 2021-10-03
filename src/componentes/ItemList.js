import Item from '../componentes/Item'
import React, { useState, useEffect } from 'react';
import '../componentes/ItemList.css'

export default function ItemList(props) {

   console.log(props.datos);
    
    return (
        <div >
            {props.datos.length !==0 ? (
            
            props.datos.map((item,index) => {
               return(
                   <Item key={index} id={item.id} nombre={item.nombre} imagen={item.imagen} stock={item.stock} inicial={item.inicial} precio={item.precio}/>
               )
            })) : (
                <div>
                  <p>Cargando Productos ....</p>
                </div>
            )}
            
        </div>
    );
};