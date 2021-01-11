import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {Provider} from 'react-redux';
import store from './components/redux/store';

const Ind = ()=>{
    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Ind);
