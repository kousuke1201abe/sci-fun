import * as React from 'react'
import twitter from '../img/social/twitter.svg'

interface Link {
  link: string
}

const TwitterLink = ({link}: Link) => {
  if (link !== undefined && link.includes("twitter.com")) {
    return (
      <a title="twitter" href={link}>
      <img
        className="fas fa-lg"
        src={twitter}
        alt="Twitter"
        style={{ width: '20px', height: '20px' }}
      />
    </a>
    )
  } else {
    return null
  }
}

export default TwitterLink
