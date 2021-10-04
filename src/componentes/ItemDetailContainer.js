import ItemDetail from '../componentes/ItemDetail'
import React, {useState , useEffect} from 'react'
import '../componentes/ItemDetailContainer.css'

export default function ItemDetailContainer(){
    
    const [itemDetail, setItemDetail] = useState({});

    const getDetail = new Promise((resolve) => {
        setTimeout(() => {
            const producto = 
            [
                {
                    id:1,
                    nombre: "Kit Cilindro FZ16",
                    imagen:"/images/kitcilindro.jpg",
                    precio:"$350.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:2,
                    nombre: "Biela FZ16",
                    imagen:"/images/bielafz16.jpg",
                    precio:"$180.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:3,
                    nombre: "Kit Psiton",
                    imagen:"/images/kitpiston.png",
                    precio:"$260.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:4,
                    nombre: "Llantas Sahara",
                    imagen:"/images/llantasahara.png",
                    precio:"$410.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:5,
                    nombre: "Manzana Clutch CB125",
                    imagen:"/images/manzanaclutchcbf125.jpg",
                    precio:"$190.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:6,
                    nombre: "Kit de Arrastre",
                    imagen:"/images/kitdearrastre.jpg",
                    precio:"$310.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:7,
                    nombre: "Kit de Arrastre",
                    imagen:"/images/kitbombafreno.jpg",
                    precio:"$120.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                },
                {
                    id:8,
                    nombre: "Kit Cilindro",
                    imagen:"/images/kitcilindro2.jpg",
                    precio:"$310.000",
                    stock:11,
                    inicial:1,
                    detalles: "DETALLES"
                }
                
            ]
                
            
            resolve(producto);
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