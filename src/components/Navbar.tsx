import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import logo from '../img/logo.svg';
import { kebabCase } from 'lodash';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
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
            });
      },
    );
  };

  render() {
    const { data } = this.props;

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          borderBottom: '0.5px solid #abb1b5',
          position: 'fixed',
          width: '100%',
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="link navbar-item"
              title="Logo"
              style={{
                marginLeft: '5px',
                marginRight: '20px',
              }}
            >
              <img src={logo} alt="logo" />
            </Link>
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
            <div className="navbar-start has-text-centered">
              {data.allMarkdownRemark.group.map(
                (category) => (
                  <Link
                    className="navbar-item has-text-weight-semibold"
                    to={`/categories/${kebabCase(
                      category.fieldValue,
                    )}/`}
                  >
                    {category.fieldValue.toUpperCase()}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default () => (
  <StaticQuery
    query={graphql`
      query CategoryQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data, count) => (
      <Navbar data={data} count={count} />
    )}
  />
);
