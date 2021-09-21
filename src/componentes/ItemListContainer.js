import './ItemListContainer.css';
import Producto from '../componentes/Producto';

export default function ItemListContainer({greeting}){
return(
    <div>
        <div>{greeting}</div>
     <Producto/>
    </div>
);

}