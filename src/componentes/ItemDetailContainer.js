import ItemDetail from '../componentes/ItemDetail'
import React, {useState , useEffect} from 'react'
import '../componentes/ItemDetailContainer.css'
import db from '../FireBase'
import {query,where, collection, getDocs} from 'firebase/firestore'
import { useParams } from 'react-router';

export default function ItemDetailContainer(){

    
    const [itemDetail, setItemDetail] = useState([]);
    const {id}=useParams();
    console.log(id)
    
    async function getProductos(db){
        const productos = query(collection(db, "productos"),where("id","==",Number(id)));
        const productosSnapshot= await getDocs(productos)
        const listaProductos = productosSnapshot.docs.map(doc => doc.data());
        setItemDetail(listaProductos)
        console.log(itemDetail)
        return listaProductos;

    }

   
  

    useEffect(() => {
       getProductos(db);
     
    },[id]);

    if(itemDetail.length==0){
        return(<div>
            <h1>Detalles</h1>
            <p>Cargando ....</p>
            
        </div>)
    }else{
        return(
            <div>
                <h1>Detalles</h1>
                <ItemDetail data={itemDetail}/>
                
            </div>
        )
    }
    
};