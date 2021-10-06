import './ItemCount.css'
import Button from 'react-bootstrap/Button';


export default function ItemCount({cantidad,sumar,restar}){


    return(
        <div>
        <Button onClick={sumar} variant="danger">+</Button> 
        <label>{cantidad} </label> 
        <Button onClick={restar} variant="danger">-</Button>    
        </div>
    );
}