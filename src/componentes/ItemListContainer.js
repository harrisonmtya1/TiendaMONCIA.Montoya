import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';


export default function ItemListContainer({greeting}){
    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const productos = [
                {
                    nombre: "Kit Cilindro FZ16",
                    imagen:"/images/kitcilindro.jpg",
                    precio:"$350.000",
                    stock:11,
                    inicial:1
                },
                {
                    nombre: "Biela FZ16",
                    imagen:"/images/bielafz16.jpg",
                    precio:"$180.000",
                    stock:11,
                    inicial:1
                },
                {
                    nombre: "Kit Psiton",
                    imagen:"/images/kitpiston.png",
                    precio:"$260.000",
                    stock:11,
                    inicial:1
                },
                {
                    nombre: "Llantas Sahara",
                    imagen:"/images/llantasahara.png",
                    precio:"$410.000",
                    stock:11,
                    inicial:1
                },
                {
                    nombre: "Llantas Sahara",
                    imagen:"/images/llantasahara.png",
                    precio:"$410.000",
                    stock:11,
                    inicial:1
                },
                {
                    nombre: "Llantas Sahara",
                    imagen:"/images/llantasahara.png",
                    precio:"$410.000",
                    stock:11,
                    inicial:1
                }
                
            ]
            resolve(productos);
        }, 2000)
    })

    useEffect(() => {
        getItems.then((data)=>{
            setItems(data);
            
        })
    },[]);

return(
    <div>
        <div>{greeting}</div>
     <ItemList datos={items}/>
     </div>
);

}