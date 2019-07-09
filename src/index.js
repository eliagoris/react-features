import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAddNote = e => {
    e.preventDefault()

    setNotes([
      ...notes,
      {
        title,
        body,
      },
    ])

    setTitle('')
    setBody('')
  }

  const handleRemoveNote = title => {
    setNotes(notes.filter(note => note.title !== title))
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => handleRemoveNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add note</p>

      <form onSubmit={handleAddNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  )
}

// const App = ({ initialCount, initialText }) => {
//   const [count, setCount] = useState(initialCount)
//   const [text, setText] = useState(initialText)

//   return (
//     <div>
//       <p>
//         The current {text} is {count}
//       </p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>

//       <input value={text} onChange={e => setText(e.target.value)} />
//     </div>
//   )
// }

// App.defaultProps = {
//   initialCount: 0,
//   initialText: 'count',
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'))
