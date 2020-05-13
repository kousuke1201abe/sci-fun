import * as React from 'react'
import twitter from '../img/social/twitter.svg'
import note from '../img/social/note.png'

interface SNSlink {
  note?: string;
  twitter?: string;
}

const Footer = class extends React.Component<SNSlink> {
  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered" style={{marginBottom: '10px'}}>
          <a title="note" href="https://note.mu/machidania">
            <img
              className="fas fa-lg"
              src={note}
              alt="note"
              style={{ width: '22px', height: '22px', margin: '10px' }}
            />
          </a>
          <a title="twitter" href="https://twitter.com/machidania">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '20px', height: '20px', margin: '10px' }}
            />
          </a>
          <p style={{ fontSize: '10px' }}>© 2019 machidania</p>
        </div>
      </footer>
    )
  }
}

export default Footer
