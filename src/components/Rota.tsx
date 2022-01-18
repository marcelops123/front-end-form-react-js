import React from "react";
import App from './Main'
import {table}from './table'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from "@chakra-ui/react";

export const RouteComponent = () => {

    return( 
        <BrowserRouter>
        <Switch>
        
        <Route index   element={App} />
        <Route path="/lista/" element={table} />
        
        </Switch>
        


        </BrowserRouter>



    );



}