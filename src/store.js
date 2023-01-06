import { configureStore } from "@reduxjs/toolkit"

import anecdoteReducer from './reducers/anecdoteReducer'
import notificatonReducer from "./reducers/notificationReducer"

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificatonReducer
  }
})

export default store