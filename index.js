import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';

import App1 from './components/math_quiz/index';
import App2 from './components/base_converter/index';
import App3 from './components/weather/index';

const Ind = ()=>{
    //return(<App1 />);
    return(<App2 />);
    //return(<App3 />);
}

AppRegistry.registerComponent(appName, () => Ind);
