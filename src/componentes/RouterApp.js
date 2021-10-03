import {BrowserRouter, Switch,Route} from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

export default function RouterApp(){
 return(
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/detalles" component={ItemDetailContainer}/>
            <Route path="/" component={ItemListContainer}/>
        </Switch>
    </BrowserRouter>
    </> 
 )
}