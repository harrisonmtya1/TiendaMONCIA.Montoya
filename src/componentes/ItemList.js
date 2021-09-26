import Item from '../componentes/Item'
import React, { useState, useEffect } from 'react';
import '../componentes/ItemList.css'

export default function ItemList() {

    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const Productos = [
                {
                    nombre: "Kit Cilindro FZ16",
                    imagen:"../images/kitcilindro.jpg",
                    precio:"$350.000",
                    stock:"11",
                    inicial:"1"
                },
                {
                    nombre: "Biela FZ16",
                    imagen:"../images/bielafz16.jpg",
                    precio:"$180.000",
                    stock:"11",
                    inicial:"1"
                },
                {
                    nombre: "Biela FZ16",
                    imagen:"../images/bielafz16.jpg",
                    precio:"$180.000",
                    stock:"11",
                    inicial:"1"
                }
                
            ]
            resolve(Productos);
        }, 2000)
    })

    useEffect(() => {
        getItems.then((data)=>{
            setItems(data);
            
        })
    },[]);
    
    return (
        <div >
            {items.length !==0 ? (
            
            items.map((item,index) => {
               return(
                   <Item key={index} nombre={item.nombre} imagen={item.imagen} stock={item.stock} inicial={item.inicial} precio={item.precio}/>
               )
            })) : (
                <div>
                  <p>Cargando Productos ....</p>
                </div>
            )}
            
        </div>
    );
};