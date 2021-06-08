import { createStore, combineReducers,applyMiddleware} from 'redux';
import { todos } from './reducer.js';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = {todos,};
const persistConfig = {
    key : 'root',
    storage,
    stateReconciler : autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistReducers = persistReducer(persistConfig,rootReducer)

export const configureStore = () => createStore(persistReducers,
            composeWithDevTools(applyMiddleware(thunk))
        );