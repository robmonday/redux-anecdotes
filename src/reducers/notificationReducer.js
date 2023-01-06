import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notify(state, action) {
      const message = action.payload
      return message
    },
    denotify(state, action) {
      return ''
    }    
  }
})

export const { notify, denotify } = notificationSlice.actions
export default notificationSlice.reducer