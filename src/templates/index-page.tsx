import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Seo from '../components/Seo'
import Tags from '../components/Tags'

export const IndexPageTemplate = ({
  posts
}) => (
  <div>
    <div className="container" style={{ padding: "50px 15px 0px 15px" }}>
      <div className="section" style={{ margin: "10px"}}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12" style={{ marginBottom: "20px" }}>
                <h1 className="headline has-text-weight-bold" style={{ margin: "8px" }}>
                  Featured Ariticles
                </h1>
              </div>
              <div className="columns is-multiline">
                {posts && posts.map((post, index) => (
                  index === 0 ?
                    <Link to={post.node.fields.slug}>
                      <article className="columns is-multiline" style={{padding: "15px"}}>
                        <div className="is-parent column is-6" style={{padding: "30px 30px 0px 30px"}}>
                          <img src={!!post.node.frontmatter.featuredimage.childImageSharp ? post.node.frontmatter.featuredimage.childImageSharp.fluid.src : post.image} width="500" height="128" alt="イラスト1" style={{borderRadius: "5px"}}></img>
                        </div>
                        <div className="is-parent column is-6" style={{padding: "30px 30px 0px 30px"}}>
                          <h2 className="has-text-weight-bold is-size-4 is-size-5-mobile" style={{lineHeight: "140%"}}>
                            {post.node.frontmatter.title}
                          </h2>
                          <p style={{ marginTop: "20px", lineHeight: "30px", color: "#333"}}>
                            {post.node.frontmatter.description}
                          </p>
                          <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.node.frontmatter.issuedAt}</p>
                          <ul className="categorylist aldrich" style={{marginTop: "15px"}}>
                            {post.node.frontmatter.tags.map(tag => (
                              <li key={tag + `category`} className="tag-item">
                                #{tag}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </Link>
                  :
                  (
                    <div className="is-parent column is-6">
                      <Link to={post.node.fields.slug}>
                        <article className="blog-list-item tile is-child box">
                          <img src={!!post.node.frontmatter.featuredimage.childImageSharp ? post.node.frontmatter.featuredimage.childImageSharp.fluid.src : post.image} width="500" height="128" alt="イラスト1" style={{borderRadius: "5px"}}></img>
                          <h2 className="has-text-weight-bold is-size-5 is-size-5-mobile" style={{lineHeight: "140%"}}>
                            {post.node.frontmatter.title}
                          </h2>
                          <p style={{ marginTop: "20px", lineHeight: "30px"}}>
                            {post.node.frontmatter.description}
                          </p>
                          <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.node.frontmatter.issuedAt}</p>
                          <ul className="categorylist aldrich" style={{marginTop: "15px"}}>
                            {post.node.frontmatter.tags.map(tag => (
                              <li key={tag + `category`} className="tag-item">
                                #{tag}
                              </li>
                            ))}
                          </ul>
                        </article>
                      </Link>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="section" style={{ margin: "10px"}}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <div style={{ marginBottom: "30px" }}>
                  <h1 className="headline has-text-weight-bold" style={{ margin: "20px" }}>
                    Latest Articles
                  </h1>
                </div>
                <BlogRoll />
                <div style={{margin: "18px"}}>
                  <Link className="column is-12 btn-outline aldrich" to="/articles">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tags />
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  link: PropTypes.string,
  featuredTags: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark
  console.log(posts.edges[0].node.frontmatter)

  return (
    <Layout>
      <Seo />
      <IndexPageTemplate
        posts = {posts.edges}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: [frontmatter___issuedAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            issuedAt(formatString: "YYYY.MM.DD HH:hh")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            description
          }
        }
      }
    }
  }
`
