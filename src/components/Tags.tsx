import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

class Tags extends React.Component {
  render() {
    const { data } = this.props
    const { group: group } = data.allMarkdownRemark
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h1 className="is-size-5 has-text-weight-bold aldrich" style={{ padding: "0px 15px" }}>Tags</h1>
                  <ul className="categorylist aldrich" style={{ padding: "0px 15px", marginTop: "30px" }}>
                    {group.map(tag => (
                      <li key={tag.fieldValue} className="tag-item">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                          #{tag.fieldValue}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query TagsQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <Tags data={data} />}
    />
)
