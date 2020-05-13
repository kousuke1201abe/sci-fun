import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import baku from '../img/baku.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{borderBottom: '0.5px solid #abb1b5', position: "fixed", width: "100%"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" style={{ paddingRight: 0 }} title="Logo">
              <img src={logo} alt="machidania" style={{ height: '30px' }} />
            </Link>
            <div className="navbar-end has-text-centered">
              <img src={baku} alt="baku" style={{ height: '45px', paddingTop: '10px', paddingRight: "20px" }} />
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered josefin" style={{ paddingTop: '10px'}}>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/authors">
                Authors
              </Link>
              <Link className="navbar-item" to="/stories">
                Stories
              </Link>
              <Link className="navbar-item fog-color" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
