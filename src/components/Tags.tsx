import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql, StaticQuery } from 'gatsby';

class Tags extends React.Component {
  render() {
    const { data } = this.props;
    const { group: group } = data.allMarkdownRemark;
    return (
      <div className="section">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ padding: '5px' }}
          >
            <div className="content">
              <h1 className="headline has-text-weight-bold">
                Tags
              </h1>
              <ul
                className="categorylist aldrich"
                style={{ marginTop: '30px' }}
              >
                {group.map((tag) => (
                  <Link
                    to={`/tags/${kebabCase(
                      tag.fieldValue,
                    )}/`}
                  >
                    <li
                      key={tag.fieldValue}
                      className="tag-item"
                    >
                      #{tag.fieldValue}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
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
);
