import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from '../components/Header';
import ErrorPage from '../pages/ErrorPage';
import FormPage from '../pages/FormPage';
import HomePage from '../pages/HomePage';
import RecordDetailPage from '../pages/RecordDetailPage';
import RecordsPage from '../pages/RecordsPage';

function RouterPages () {
    return(
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>

            <Route exact path='/registros' >
                <RecordsPage />
            </Route>

            <Route exact path='/validar/:id' >
                <RecordDetailPage />
            </Route>

            <Route exact path='/registrar' >
                <FormPage />
            </Route>

            <Route path="*" >
                <ErrorPage />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default RouterPages