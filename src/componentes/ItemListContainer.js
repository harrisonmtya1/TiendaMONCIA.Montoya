import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { useParams } from 'react-router-dom';

// la categoria 1 es promociones la categoria 2 es lo mas nuevo

export default function ItemListContainer({greeting}){
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams();

    console.log(idCategoria);

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const productos = [
                {
                    id:1,
                    nombre: "Kit Cilindro FZ16",
                    imagen:"/images/kitcilindro.jpg",
                    precio:"$350.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:1
                },
                {
                    id:2,
                    nombre: "Biela FZ16",
                    imagen:"/images/bielafz16.jpg",
                    precio:"$180.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:1
                },
                {
                    id:3,
                    nombre: "Kit Psiton",
                    imagen:"/images/kitpiston.png",
                    precio:"$260.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:1
                },
                {
                    id:4,
                    nombre: "Llantas Sahara",
                    imagen:"/images/llantasahara.png",
                    precio:"$410.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:1
                },
                {
                    id:5,
                    nombre: "Manzana Clutch CB125",
                    imagen:"/images/manzanaclutchcbf125.jpg",
                    precio:"$190.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:2
                },
                {
                    id:6,
                    nombre: "Kit de Arrastre",
                    imagen:"/images/kitdearrastre.jpg",
                    precio:"$310.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:2
                },
                {
                    id:7,
                    nombre: "Kit de Arrastre",
                    imagen:"/images/kitbombafreno.jpg",
                    precio:"$120.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:2
                },
                {
                    id:8,
                    nombre: "Kit Cilindro",
                    imagen:"/images/kitcilindro2.jpg",
                    precio:"$310.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES",
                    categoria:2
                }
                
            ]
            var arrayCategoria=[];
            for (let producto of productos){
                if(producto.categoria==idCategoria){
                    arrayCategoria.push(producto)
                }
            }
            if(arrayCategoria.length !==0){resolve(arrayCategoria);}else{resolve(productos);}
            
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