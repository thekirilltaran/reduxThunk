import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { client } from '../api';
import {rootReducer} from './root-reducer'

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(client)),
  )
)

store.subscribe(() =>{
  console.log(store.getState())
})