import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import createlogger from 'redux-logger';

import * as sagas from './sagas';

import { MainRoute } from './routes'
import { reducer } from './store/reducer';

// import "../../shared/diagnostics";

console.log("Storefront check", process.env);
const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];


if (!process.env.NODE_ENV === "production") {
    
    middleware = [...middleware,createlogger]

}

const store = createStore(
    reducer,
    applyMiddleware(
        sagaMiddleware
        // createlogger
    )
);

for (let saga of Object.values(sagas))
{

    sagaMiddleware.run(saga);

}


ReactDOM.render(
    <Provider store={store}>

        <MainRoute />
        
    </Provider>,

    document.querySelector("#Container")
);

store.dispatch({type:"INIT"});