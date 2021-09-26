
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import ItemDetailContainer from '../componentes/ItemDetailContainer'

export default function ItemListContainer({greeting}){
  

return(
    <div>
        <div>{greeting}</div>
     <ItemList/>
     <ItemDetailContainer/>
    </div>
);

}