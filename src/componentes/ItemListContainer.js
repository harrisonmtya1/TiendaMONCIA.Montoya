import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { useParams } from 'react-router-dom';
import db from '../FireBase'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

// la categoria 1 es promociones la categoria 2 es lo mas nuevo

export default function ItemListContainer({greeting}){
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams();


    async function getProductos(db){
        const productos = collection(db, "productos");
        const productosSnapshot= await getDocs(productos)
        const listaProductos = productosSnapshot.docs.map(doc => doc.data());
        setItems(listaProductos)
        return listaProductos;

    }

    const filtrarProductos=()=>{
        var arrayCategoria=[];
                for (let item of items){
                    if(item.categoria==idCategoria){
                        arrayCategoria.push(item)
                    }
                }
                if(arrayCategoria.length !==0){setItems(arrayCategoria);}else{setItems(items);}
    }
  

    useEffect(() => {
       getProductos(db);
       filtrarProductos();
    },[]);

return(
    <div>
    <div>{greeting}</div>
     <ItemList datos={items}/>
     </div>
);

}