import { createAction } from 'redux-actions'

export const addFishBurger = createAction('ADD_FISH_BURGER')
export const addCheeseBurger = createAction('ADD_CHEESE_BURGER')
export const addChickenBurger = createAction('ADD_CHICKEN_BURGER')

export const addCoke = createAction('ADD_COKE')
export const addGreenTea = createAction('ADD_GREEN_TEA')
export const addWater = createAction('ADD_WATER')

export const setTakeaway = createAction('SET_TAKEAWAY')
export const setEatIn = createAction('SET_EAT_IN')

