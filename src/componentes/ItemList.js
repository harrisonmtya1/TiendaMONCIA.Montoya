import Item from '../componentes/Item'

import '../componentes/ItemList.css'

export default function ItemList(props) {

   
    
    return (
        <div >
            {props.datos.length !==0 ? (
            
            props.datos.map((item,index) => {
               return(
                   <Item key={index} id={item.id} nombre={item.nombre} imagen={item.imagen} stock={item.stock} inicial={item.inicial} precio={item.precio} detalles={item.detalles}/>
               )
            })) : (
                <div>
                  <p>Cargando Productos ....</p>
                </div>
            )}
            
        </div>
    );
};