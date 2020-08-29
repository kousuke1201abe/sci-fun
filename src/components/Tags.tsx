import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

class Tags extends React.Component {
  render() {
    const { data } = this.props
    const { group: group } = data.allMarkdownRemark
    return (
      <div className="container">
        <div className="section" style={{ margin: "10px"}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <div style={{ padding: "0px 15px" }}>
                    <h1 className="headline has-text-weight-bold">Tags</h1>
                  </div>
                  <ul className="categorylist aldrich" style={{ padding: "0px 15px", marginTop: "30px" }}>
                    {group.map(tag => (
                      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        <li key={tag.fieldValue} className="tag-item">
                          #{tag.fieldValue}
                        </li>
                      </Link>
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
