import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import logo from '../img/logo.svg'
import { kebabCase } from 'lodash'
import SnsLinks from './SnsLinks'

interface SNSlink {
  note?: string;
  twitter?: string;
}

const Footer = class extends React.Component<SNSlink> {
  render() {
    const { data } = this.props

    return (
      <footer className="footer has-background-white" style={{ borderTop: "1px solid #dcdcdc" }}>
          <div className="section" style={{ margin: "10px"}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns is-multiline">
                  <div className="is-parent column is-2">
                    <Link to="/" className="link footer-logo" title="Logo">
                      <img
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="is-parent column is-5">
                    <p style={{ fontSize: '10px', marginLeft: "5px", marginRight: "5px"}}>カテゴリー</p>
                    <div className="is-flex" style={{flexWrap: "wrap"}}>
                      {data.allMarkdownRemark.group.map(category => (
                        <Link className="link" style={{padding: '5px'}} to={`/categories/${kebabCase(category.fieldValue)}/`}>
                          {category.fieldValue.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="is-parent column is-5">
                    <p style={{ fontSize: '10px', marginLeft: "5px", marginRight: "5px"}}>SY_FY:labについて</p>
                    <div className="is-flex" style={{flexWrap: "wrap"}}>
                      <Link className="link" to="/contact" style={{padding: '5px', fontSize: '0.8rem'}}>
                        <p>お問い合わせ</p>
                      </Link>
                      <Link className="link" to="/" style={{padding: '5px', fontSize: '0.8rem'}}>
                        <p>記事一覧</p>
                      </Link>
                      <Link className="link" to="/" style={{padding: '5px', fontSize: '0.8rem'}}>
                        <p>利用規約</p>
                      </Link>
                      <Link className="link" to="/contact" style={{padding: '5px', fontSize: '0.8rem'}}>
                        <p>リリースの送付はこちら</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="is-flex" style={{justifyContent: "center", alignItems: "center"}}>
              <p style={{ fontSize: '10px', margin: "5px"}}>© 2020 SY_FY:lab</p>
              <SnsLinks />
              <p style={{ fontSize: '10px', margin: "5px"}}>SY_FY:lab(サイファイラボ)</p>
            </div>
          </div>
      </footer>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterCategoryQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
)
