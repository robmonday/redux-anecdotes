import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  // console.log(anecdotes)
  const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes) // spread syntax copies array to avoid mutation

  const dispatch = useDispatch()

  return (
    <>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </>    
  )
}

export default AnecdoteList