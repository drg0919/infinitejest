import React from 'react';
import {createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
// const store = createStore(reducers,composeEnhancers(applyMiddleware()));

export default ({children, initialState = {}}) => {
    return(
        <Provider store={createStore(reducers,initialState,composeEnhancers(applyMiddleware(reduxPromise)))}>
            {children}
        </Provider>
         );
}