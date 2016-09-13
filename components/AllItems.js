import React, { Component, PropTypes } from 'react'
import { store } from '../index'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// Be sure to include styles at some point, probably during your bootstrapping

export default class AllItems extends Component {
  render() {
    return(
        <div>
          <h3>Items Ordered</h3>
            <ListGroup>
              {
                store.getState().foodItems.map((item) => {
                  return (
                      <ListGroupItem>
                        <h3>{ item.name } { item.temp }</h3>
                        <p>{ item.ingredients ? item.ingredients.join(" ") : '' }</p>
                      </ListGroupItem>);
                })
              }
            </ListGroup>
        </div>);
  }
}