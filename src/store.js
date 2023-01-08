import { configureStore } from "@reduxjs/toolkit"

import anecdoteReducer from './reducers/anecdoteReducer'
import notificatonReducer from './reducers/notificationReducer'
import filterReducer from "./reducers/filterReducer"

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificatonReducer,
    filter: filterReducer
  }
})

export default store