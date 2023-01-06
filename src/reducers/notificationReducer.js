import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'test notification',
  reducers: {
    notify(state, action) {
      const message = action.payload
      return message
    }
  }
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer