import * as React from 'react'

interface Link {
  link: string
}

const BlogNoteLink = ({link}: Link) => {
  if (link !== null) {
    return (
    <div className="has-text-centered" style={{marginTop: "50px"}}>
      <a className="josefin" style={{color: "#2b2523", fontSize: "18px"}}
        href={link} target="_blank">続きはnoteへ
      </a>
    </div>
    )
  } else {
    return null
  }
}

export default BlogNoteLink
