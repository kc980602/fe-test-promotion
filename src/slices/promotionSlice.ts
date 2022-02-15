import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import service from '~/service'
import type { AppThunk } from '~/store'
import { Category, Promotion } from '~/types/promotion.type'


const getCategories = createAsyncThunk(
  'promotion/getCategories',
  async () => {
    return await service.promotion.getCategories()
  }
)

const getPromotions = createAsyncThunk<Promotion[], number>(
  'promotion/getPromotions',
  async (id) => {
    return await service.promotion.getPromotions({ id })
  }
)

interface PromotionState {
  categories: Category[],
  promotions: Promotion[]
}

const initialState: PromotionState = {
  categories: [],
  promotions: []
}

const slice = createSlice({
  name: 'promotion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategories.fulfilled,
      (state, action) => {
        // Add categories to the state array
        state.categories = action.payload
      }
    )

    builder.addCase(
      getPromotions.fulfilled,
      (state, action) => {
        // Add promotions to the state array
        state.promotions = action.payload
      }
    )
  },
})

export const { reducer } = slice
