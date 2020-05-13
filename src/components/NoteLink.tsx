import * as React from 'react'
import note from '../img/social/note.png'

interface Link {
  link: string
}

const NoteLink = ({link}: Link) => {
  if (link !== undefined && link.includes("note.mu")) {
    return (
    <a title="note" href={link}>
      <img
        className="fas fa-lg"
        src={note}
        alt="note"
        style={{ width: '22px', height: '22px' }}
      />
    </a>
    )
  } else {
    return null
  }
}

export default NoteLink
