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
          <a title="twitter" href="https://twitter.com/machidania">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
          <Link className="btn" to="/contact" style={{paddingLeft: '10px', fontSize: '10px'}}>
            <p>お問い合わせ</p>
          </Link>
          <p style={{ fontSize: '10px', paddingTop: "10px" }}>© 2019 machidania</p>
        </div>
      </footer>
    )
  }
}

export default Footer
