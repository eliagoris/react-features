import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const defaultNotes = JSON.parse(localStorage.getItem('notes'))

    if (defaultNotes) {
      setNotes(defaultNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

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
        <Note key={note.title} note={note} handleRemoveNote={handleRemoveNote} />
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

const Note = ({ note, handleRemoveNote }) => {
  useEffect(() => {
    console.log('setting up effect')

    return () => {
      console.log('cleaning up effect')
    }
  }, [])

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => handleRemoveNote(note.title)}>x</button>
    </div>
  )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'))
