import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

export default function RouterApp() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/detalles/:id" component={ItemDetailContainer} />
                    <Route path="/categoria/:idCategoria" component={ItemListContainer}/>
                    <Route path="/">
                        <ItemListContainer greeting={"Bienvenido a Tienda MONCIA"} />
                    </Route>

                </Switch>
            </BrowserRouter>
        </>
    )
}