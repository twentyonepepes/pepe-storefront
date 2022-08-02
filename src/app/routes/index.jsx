import React from 'react';

import {

  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
  
} from "react-router-dom";

import { connect } from 'react-redux';

import { OrderRoute } from './browse';
import { CheckoutRoute } from './checkout';
import { DetailRoute } from './detail';
import { Fulfill, Fulfill as FulfillRoute } from './fulfill';
import { Header } from '../components/Header';

import './main.css';

console.info("Update something else");

export const MainRoute = connect()(()=>(
    <div className="main">
        
        <Router>

            <Header/>

            <div className="main-content-container">

                <Switch>

                    <Route path="/" exact>

                        <Redirect to="/browse"/>                    

                    </Route>

                    <Route path="/detail/:productId">

                        <DetailRoute />

                    </Route>

                    <Route path="/checkout">

                        <CheckoutRoute />

                    </Route>

                    <Route path="/browse" exact>

                        <OrderRoute />

                    </Route>

                    <Route path="/thankyou" exact>

                        <FulfillRoute />

                    </Route>

                    <Route path="/browse/:category1" exact>

                        <OrderRoute />

                    </Route>

                    <Route path="/browse/:category/:category2" exact>

                        <OrderRoute />

                    </Route>

                    <Redirect to="/browse"/>

                </Switch>

            </div>

        </Router>

    </div>

))