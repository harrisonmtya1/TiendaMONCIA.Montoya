import '../componentes/ItemDetail.css';
import ItemCount from '../componentes/ItemCount'
import { useParams } from 'react-router';

const ItemDetail = (props) => {

    const {id}= useParams();

    if(props.data.length !==0 &&  props.data.length !== undefined){
    var item = (props.data).find(elemento => elemento.id == id);
    console.log(id);}
    

    return (
        <div>
            {
            props.data.length !==0 &&  props.data.length !== undefined?
            
                (<div className="contenedorItems">

                    <div className="contenedorItems__item">
                        <h2 >{item.nombre}</h2>
                        <img src={item.imagen} alt="img" />
                        <h3 >{props.precio}</h3>
                        <ItemCount stock={item.stock} initial={item.inicial} />
                        <button type="submit" className="contenedorItems__item__boton">Comprar</button>
                        <p>{`${item.detalles} Este es el Detalle`}</p>
                    </div>
                </div>) : (
            
                <div>
                    <p>Cargando....</p>
                </div>
                )
            }

        </div>
    )

}

export default ItemDetail;