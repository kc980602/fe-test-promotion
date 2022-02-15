import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import service from '~/service'
import { Category, Promotion } from '~/types/promotion.type'

interface PromotionState {
  categories: Category[],
  promotions: Promotion[]
}

const initialState: PromotionState = {
  categories: [],
  promotions: []
}

export const getCategories = createAsyncThunk(
  'promotion/getCategories',
  async () => {
    return await service.promotion.getCategories()
  }
)

export const getPromotions = createAsyncThunk<Promotion[], number>(
  'promotion/getPromotions',
  async (id, thunkAPI) => {
    return await service.promotion.getPromotions({ id }, {
      signal: thunkAPI.signal,
    })
  }
)

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
