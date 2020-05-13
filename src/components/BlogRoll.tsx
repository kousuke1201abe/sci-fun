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
                  className={`blog-list-item tile is-child box`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta">
                      <span className="is-size-5 has-text-weight-bold">
                        {post.frontmatter.title}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                  </p>
                  <div className="josefin" style={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                    <Img style={{width: "25px", borderRadius: "50%", marginRight: "5px"}} fluid={post.frontmatter.authorimage.childImageSharp.fluid} alt={post.frontmatter.author} />
                    <p className="josefin" style={{color: "#333", fontSize: "12px"}}>written by {post.frontmatter.author}</p>
                  </div>
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
              excerpt(truncate: true)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                author
                authorimage {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
