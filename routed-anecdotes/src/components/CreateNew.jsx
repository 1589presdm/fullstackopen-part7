import { useNavigate } from "react-router"
import { useField } from "../hooks"

const CreateNew = ({ addAnecdote }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('url')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    addAnecdote({ 
      content:content.value, 
      author: author.value, 
      info: info.value, 
      votes: 0 })
    navigate("/")
  }

  const handleReset = (event) => {
    content.reset()
    author.reset()
    info.reset()
  }
  

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
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
