import React, { Component, PropTypes } from 'react'
import { store } from '../index'
import Select from 'react-select';
import { addFishBurger, addChickenBurger, addCheeseBurger } from '../Actions/Actions'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
// Be sure to include styles at some point, probably during your bootstrapping

export default class DrinkItems extends Component {
  render() {
    return(
        <div>
          <h3>Food</h3>
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button onClick={() => store.dispatch(addCheeseBurger())}>Cheese Burger</Button>
              <Button onClick={() => store.dispatch(addFishBurger())}>Fish Burger</Button>
              <Button onClick={() => store.dispatch(addChickenBurger())}>Chicken Burger</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>);
  }
}