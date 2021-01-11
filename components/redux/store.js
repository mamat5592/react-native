import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers/combineReducers';

const logger = createLogger();

export default createStore(reducers,undefined,applyMiddleware(logger));