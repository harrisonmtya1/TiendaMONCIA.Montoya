import '../componentes/ItemDetail.css'

const ItemDetail=(props)=>{
return(
<div>
<div className="contenedorItems">
    {console.log(props.data)}
                <div className="contenedorItems__item">
                    <h2 >{props.data.nombre}</h2>
                    <img src={props.data.imagen} alt="img"/>
                    <h3 >{props.precio}</h3>
                    <button type="submit" className="contenedorItems__item__boton">Comprar</button>
                    <p>{`${props.data.detalle} Este es el Detalle`}</p>
                </div>
            </div>
</div>
)

}

export default ItemDetail;