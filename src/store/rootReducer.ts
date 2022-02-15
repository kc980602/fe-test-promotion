import { combineReducers } from '@reduxjs/toolkit'
import { reducer as promotionReducer } from '~/slices/promotionSlice'
export const rootReducer = combineReducers({
  promotion: promotionReducer,
})
