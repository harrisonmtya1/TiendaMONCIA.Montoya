import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

export default function ItemCount({stock,initial}){
    const [cantidad, setCantidad]= useState(initial);

const sumar=()=>{
    (cantidad===stock? alert("Cantidad igual a stock") : setCantidad (cantidad+1));
    
};
const restar=()=>{
    (cantidad===initial? alert("Cantidad igual a inicial"): setCantidad (cantidad-1));
};

    return(
        <div>
        <Button onClick={sumar} variant="danger">+</Button> 
        <label>{cantidad} </label> 
        <Button onClick={restar} variant="danger">-</Button>    
        </div>
    );
}