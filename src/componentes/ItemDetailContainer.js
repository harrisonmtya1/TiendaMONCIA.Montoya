import ItemDetail from '../componentes/ItemDetail'
import React, {useState , useEffect} from 'react'
import '../componentes/ItemDetailContainer.css'
import db from '../FireBase'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

export default function ItemDetailContainer(){
    
    const [itemDetail, setItemDetail] = useState([]);

    async function getProductos(db){
        const productos = collection(db, "productos");
        const productosSnapshot= await getDocs(productos)
        const listaProductos = productosSnapshot.docs.map(doc => doc.data());
        setItemDetail(listaProductos)
        return listaProductos;

    }

   
  

    useEffect(() => {
       getProductos(db);
     
    },[]);

    return(
        <div>
            <h1>Detalles</h1>
            <ItemDetail data={itemDetail}/>
        </div>
    )
};