import React, { Component, PropTypes } from 'react'
import { store } from '../index'
import Select from 'react-select';
import { addCoke, addWater, addGreenTea } from '../Actions/Actions'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
// Be sure to include styles at some point, probably during your bootstrapping

export default class FoodItems extends Component {
  render() {

    return(
        <div>
          <h3>Drinks</h3>
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
             <Button onClick={() => store.dispatch(addCoke())}>Coke</Button>
             <Button onClick={() => store.dispatch(addWater())}>Water</Button>
             <Button onClick={() => store.dispatch(addGreenTea({ temp: 'Hot'}))}>Green Tea Hot</Button>
             <Button onClick={() => store.dispatch(addGreenTea({ temp: 'Cold'}))}>Green Tea Cold</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>);
  }
}