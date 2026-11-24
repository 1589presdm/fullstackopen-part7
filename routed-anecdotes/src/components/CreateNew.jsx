import { useNavigate } from "react-router"
import { useField } from "../hooks"
import { useAnecdotes } from '../hooks/useAnecdotes'

const CreateNew = ({ }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('url')
  const navigate = useNavigate()
  const { addAnecdote } = useAnecdotes()

  const { reset: resetContent, ...contentProps } = content
  const { reset: resetAuthor, ...authorProps } = author
  const { reset: resetInfo, ...infoProps } = info


  const handleSubmit = async (e) => {
    e.preventDefault()
    const anecdote = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    }
    await addAnecdote(anecdote)
    navigate("/")
  }

  const handleReset = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }


  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentProps} />
        </div>
        <div>
          author
          <input {...authorProps} />
        </div>
        <div>
          url for more info
          <input {...infoProps} />
        </div>
        <div>
          {content.value} {author.value} {info.value}
        </div>
        <button>create</button>
        <button type='button' onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
