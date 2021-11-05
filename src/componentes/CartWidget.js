
import './CartWidget.css';
import CartContext from './CartContext';
import { useContext, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { collection, addDoc } from 'firebase/firestore';
import db from '../FireBase'




export default function CardWidget({ clase, cerrar }) {

    const { productos, eliminarProducto, vaciarCarro } = useContext(CartContext);
    var claseFormulario = "ocultar";

    if (productos.length !== 0) {
        claseFormulario = "mostrar"
    }


    const enviarDatos = (e) => {
        e.preventDefault()
        let semaforo = true
        for (let valor of e.target) {

            if (valor.value == "") {
                alert("Para completar su orden por favor diligenciar el formulario por completo")
                semaforo = false
                break
            }
        }
        if (semaforo) {
            pedido.comprador.name = e.target[0].value;
            pedido.comprador.correo = e.target[1].value;
            pedido.comprador.direccion = e.target[2].value;
            pedido.comprador.telefono = e.target[3].value;
            console.log(pedido)
            ordenarFiraBase(pedido)
            vaciarCarro()
        }
    }

    const pedido = {
        comprador: {
            name: "",
            correo: "",
            direccion: "",
            telefono: 0
        },
        items: productos,
        total: 0

    }

    for (const producto of productos) {
        pedido.total = pedido.total + producto.precio * producto.cantidad;
    }

    async function ordenarFiraBase(pedido) {
        if (pedido.items.length == 0) {
            alert("No hay compras por cofirmar")
        } else {
            const ordenFireBase = collection(db, "pedidos");
            const orden = await addDoc(ordenFireBase, pedido);
            alert(`El id de su orden es ${orden.id}`);
        }
    }



    return (
        <div className={`${clase}`}>
            <div className={"divTitulo"}><p>Carrito de Compras</p><h3 onClick={cerrar} className={"cerrar"}>X</h3></div>
            {productos.map((producto) => {
                return (
                    <div className={"contenedorItem"}>

                        <div><img src={producto.imagen}></img></div>
                        <div><h4>{producto.nombre}</h4>
                            <p>{producto.detalles}</p>
                            <p>Cantidad: {`${producto.cantidad}`}</p>
                            <h4>{`$ ${producto.precio}`}</h4>
                            <DeleteIcon onClick={() => eliminarProducto(producto.id)} />
                        </div>

                    </div>
                )
            })}
            <div>{`Total compra: $ ${pedido.total}`}</div>
            <div>
                <h6 className="tituloFormulario">Completa tu Compra y disfruta tu producto</h6>
                <form className={claseFormulario} onSubmit={enviarDatos}>
                    <input className="inputFormulario" type="text" placeholder="Nombre" name="nombre" />
                    <input className="inputFormulario" type="email" placeholder="Correo electronico" name="correo" />
                    <input className="inputFormulario" type="text" placeholder="Direccion de domicilio" name="direccion" />
                    <input className="inputFormulario" type="number" placeholder="Numero de telefono" name="numero" />
                    <input className="btnCofirmarOrden" type="submit" value="Confirmar Orden" />
                </form>

            </div>

        </div>
    );


}