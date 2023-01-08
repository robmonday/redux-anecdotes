import { useSelector } from "react-redux"

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const notification = useSelector(state => state.notification)
  
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