import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import logo from '../img/logo.svg'
import baku from '../img/baku.png'
import { kebabCase } from 'lodash'

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
    const { data } = this.props

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
            <div className="navbar-start has-text-centered has-text-weight-bold is-bold-light" style={{ paddingTop: '10px'}}>
              {data.allMarkdownRemark.group.map(tag => (
                <Link className="navbar-item" to={`/categories/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query TagQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data, count) => <Navbar data={data} count={count} />}
  />
)

