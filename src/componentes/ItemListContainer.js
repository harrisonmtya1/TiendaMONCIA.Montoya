import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { useParams } from 'react-router-dom';
import db from '../FireBase'
import {query, where , collection, getDocs} from 'firebase/firestore'

// la categoria 1 es promociones la categoria 2 es lo mas nuevo

export default function ItemListContainer({greeting}){
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams();
    


    async function getProductos(db){
        let productos;
        if(idCategoria == 1 || idCategoria==2){
           productos= query(collection(db,"productos"),where("categoria","==", Number(idCategoria)));
        }else{
            productos = collection(db, "productos");
        }
        const productosSnapshot= await getDocs(productos)
        const listaProductos = productosSnapshot.docs.map(doc => doc.data());
        setItems(listaProductos)
       
        return listaProductos;
    }

   
  

    useEffect(() => {
       getProductos(db);
      
    },[idCategoria]);

return(
    <div>
    <div>{greeting}</div>
     <ItemList datos={items}/>
     </div>
);

}