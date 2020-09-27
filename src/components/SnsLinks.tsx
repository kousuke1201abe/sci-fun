import * as React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const SnsLinks = () => {
  return (
    <div className="">
      <FacebookShareButton url="/" style={{margin: "5px"}}>
        <FacebookIcon size={40}/>
      </FacebookShareButton>
      <TwitterShareButton url="/" style={{margin: "5px"}}>
        <TwitterIcon size={40}/>
      </TwitterShareButton>
    </div>
  )
}

export default SnsLinks
