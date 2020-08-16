import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <Link to={post.fields.slug}>
                <article
                  className="blog-list-item tile is-child box"
                >
                  <div>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail" style={{marginBottom: "20px"}}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta" style={{marginBottom: "20px"}}>
                      <span className="is-size-5 has-text-weight-bold">
                        {post.frontmatter.title}
                      </span>
                    </p>
                  </div>
                  <p style={{marginBottom: "10px"}}>
                    {post.excerpt}
                  </p>
                  <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.frontmatter.issuedAt}</p>
                </article>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          sort: { fields: [frontmatter___id], order: DESC }
        ) {
          edges {
            node {
              excerpt(truncate: true, pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                issuedAt
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
