import * as React from 'react'
import twitter from '../img/social/twitter.svg'
import { Link } from 'gatsby'

interface SNSlink {
  note?: string;
  twitter?: string;
}

const Footer = class extends React.Component<SNSlink> {
  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered" style={{marginBottom: '10px'}}>
          <Link className="link" to="/contact" style={{padding: '10px', fontSize: '12px'}}>
            <p>お問い合わせ</p>
          </Link>
          <p style={{ fontSize: '10px' }}>© 2020 WEBSITE TITLE</p>
        </div>
      </footer>
    )
  }
}

export default Footer
