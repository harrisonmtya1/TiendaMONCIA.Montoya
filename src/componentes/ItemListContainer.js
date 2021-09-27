
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';


export default function ItemListContainer({greeting}){
  

return(
    <div>
        <div>{greeting}</div>
     <ItemList/>
     </div>
);

}