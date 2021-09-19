import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

export default function ItemCount(){
    const [cantidad, setCantidad]= useState(1);

const sumar=()=>{
    setCantidad (cantidad+1);
};
const restar=()=>{
    setCantidad (cantidad-1);
};

    return(
        <div>
        <Button onClick={sumar} variant="danger">+</Button> 
        <label>{cantidad} </label> 
        <Button onClick={restar} variant="danger">-</Button>    
        </div>
    );
}