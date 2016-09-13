import React, { Component, PropTypes } from 'react'
import { store } from '../index'
import Select from 'react-select';
import { setEatIn, setTakeaway } from '../Actions/Actions'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
// Be sure to include styles at some point, probably during your bootstrapping

export default class TakeawayEatIn extends Component {
  render() {
    const takeaway = store.getState().takeaway;
    return(
        <div>
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button bsStyle={!takeaway ? "success" : ""} onClick={() => store.dispatch(setEatIn())}>Eat In</Button>
              <Button bsStyle={takeaway ? "success" : ""} onClick={() => store.dispatch(setTakeaway())}>Takeaway</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>);
  }
}