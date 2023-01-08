import { useEffect } from 'react'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import anecdoteService from './services/anecdotes'
import { setAnecdotes } from "./reducers/anecdoteReducer"

import { useSelector, useDispatch } from "react-redux"
import anecdotes from './services/anecdotes'

const App = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <Notification message={notification} />}
      <AnecdoteForm /> <br />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App