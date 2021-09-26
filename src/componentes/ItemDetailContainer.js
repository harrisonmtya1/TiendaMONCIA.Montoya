import ItemDetail from '../componentes/ItemDetail'
import React, {useState , useEffect} from 'react'
import '../componentes/ItemDetailContainer.css'

export default function ItemDetailContainer(){
    
    const [itemDetail, setItemDetail] = useState();

    const getDetail = new Promise((resolve) => {
        setTimeout(() => {
            const Producto = 
                {
                    nombre: "Kit Cilindro FZ16",
                    imagen:"../images/kitcilindro.jpg",
                    precio:"$350.000",
                    detalle:"Detalles de este producto"
                }
                
            
            resolve(Producto);
        }, 2000)
    })

    useEffect(() => {
        getDetail.then((data)=>{
            setItemDetail(data);
            
        })
    },[]);

    return(
        <div>
            <h1>Detalles</h1>
            <ItemDetail data={itemDetail}/>
        </div>
    )
};