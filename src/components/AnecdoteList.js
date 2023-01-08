import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify, denotify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  // console.log(anecdotes)
  const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes) // spread syntax copies array to avoid mutation
  
  const filteredAnecdotes = []
  for (const anecdoteObj of sortedAnecdotes) {
    const textToSearch = anecdoteObj.content.toLowerCase()
    if (textToSearch.includes(filter.toLowerCase())) {
      filteredAnecdotes.push(anecdoteObj)
    }
  }

  const dispatch = useDispatch()

  const createVoteAction = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(notify(`Voted for: ${anecdote.content}`))
    setTimeout(() => {
      dispatch(denotify())
    }, 3000)
  }

  return (
    <>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => createVoteAction(anecdote) }>vote</button>
          </div>
        </div>
      )}
    </>    
  )
}

export default AnecdoteList