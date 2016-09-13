import { handleActions } from 'redux-actions'

let id = 0;
export const addBurgers =  handleActions({
  'ADD_CHICKEN_BURGER': (state) => {
    return [
        ...state,
      {
        id: id++,
        name: 'Chicken Burger',
        ingredients: ['bread','chicken', 'lettuce']
      }
    ]
  },
  'ADD_FISH_BURGER': (state) => {
    return [
      ...state,
      {
        id: id++,
        name: 'Fish Burger',
        ingredients: ['bread','fish','lettuce']
      }
    ]
  },
  'ADD_CHEESE_BURGER': (state) => {
    return [
      ...state,
      {
        id: id++,
        name: 'Cheese Burger',
        ingredients: ['bread','beef','lettuce']
      }
    ]
  }
}, []);

export const addDrinks =  handleActions({
  'ADD_COKE': (state) => {
    return [
      ...state,
      {
        id: id++,
        name: 'Coke'
      }
    ]
  },
  'ADD_GREEN_TEA': (state, {payload : {temp}}) => {
    return [
      ...state,
      {
        id: id++,
        name: 'Green Tea',
        temp: temp
      }
    ]
  },
  'ADD_WATER': (state) => {
    return [
      ...state,
      {
        id: id++,
        name: 'Water'
      }
    ]
  }
}, []);

export const takeaway =  handleActions({
  'SET_EAT_IN': () => {
    return false
  },
  'SET_TAKEAWAY': () => {
    return true
  }
}, false);

