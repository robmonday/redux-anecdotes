import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notify, denotify } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(create(content))
    dispatch(notify(`Created: ${content}`))
    setTimeout(() => {
      dispatch(denotify())
    }, 3000)
  }

  return (
    <>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm