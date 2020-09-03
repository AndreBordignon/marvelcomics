import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../../ReactotronConfig'
import combineReducers from './combineReducers';

const store = createStore(combineReducers, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;