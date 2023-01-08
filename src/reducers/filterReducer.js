import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(state,action) {
      const value = action.payload
      return value
    }
  }
})

export const { change } = filterSlice.actions
export default filterSlice.reducer