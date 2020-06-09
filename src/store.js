import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'react-thunk';

let store;

const composeEnhancers = composeWithDevTools({});

export default function configureStore () {
    if (!store) {
        store = createStore(rootReducer, composeEnhancers());
    }
    return store;
}