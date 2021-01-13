import App from './app';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

export default Index = ()=>{
    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
}