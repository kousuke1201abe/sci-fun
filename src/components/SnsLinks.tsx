import * as React from 'react'
import twitter from "../img/social/twitter.svg"

const SnsLinks = () => {
  return (
    <div>
      <a href="https://twitter.com/SY_FY_lab" target="_blank" rel="noopener noreferrer" style={{margin: "5px"}}>
        <img
          width="20"
          src={twitter}
          alt="twitter"
        />
      </a>
    </div>
  )
}

export default SnsLinks
