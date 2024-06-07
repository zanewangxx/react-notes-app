import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
    //check if the length too long, will show "..."
    <Link to={`/edit-note/${note.id}`} className="note">
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + "...": note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem
