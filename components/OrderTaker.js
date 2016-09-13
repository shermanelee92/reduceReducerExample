import React, { Component, PropTypes } from 'react'
import { store } from '../index'
import FoodItemAdder from './FoodItemAdder';
import DrinkItemAdder from './DrinkItemAdder';
import TakeawayEatIn from './TakeawayEatIn';
import AllItems from './AllItems';

export default class OrderTaker extends Component {
  render() {
    return(
        <div style={{'margin-left':'50px'}} className="row">
          <div className='col-xs-6' >
            <h1>Take An Order</h1>
            <TakeawayEatIn />
            <DrinkItemAdder />
            <FoodItemAdder />
            <AllItems />
          </div>

          <div className='col-xs-6'>
            <h1>Object State Tree </h1>
            <pre>{JSON.stringify(store.getState(), null, 4) }</pre>
          </div>
        </div>
    );
  }
}
