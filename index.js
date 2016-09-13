import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import OrderTaker from './components/OrderTaker'
import { addBurgers, addDrinks, takeaway }  from './reducers/foodReducer'
import  reduceReducers  from 'reduce-reducers';

const rootEl = document.getElementById('root')
const foodItems = reduceReducers(addBurgers, addDrinks)
export const store = createStore(combineReducers({foodItems, takeaway}));
function render() {
  ReactDOM.render(
    <OrderTaker />,
    rootEl
  )
}

render();
store.subscribe(render);

