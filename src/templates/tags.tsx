import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

class TagRoute extends React.Component<TagType> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div className="is-parent column is-6" key={post.id} >
        <Link to={post.node.fields.slug}>
          <article
            className={`blog-list-item tile is-child box`}
          >
            <header>
              {post.node.frontmatter.featuredimage ? (
                <div className="column is-12 featured-thumbnail" style={{padding: "0px"}}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
            </header>
            <div className="post-meta is-size-5 has-text-weight-bold" style={{ marginBottom: "10px" }}>
                {post.node.frontmatter.title}
            </div>
            <p style={{ marginBottom: "10px" }}>
              {post.node.excerpt}
            </p>
            <div className="josefin" style={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
              <Img style={{width: "25px", borderRadius: "50%", marginRight: "5px"}} fluid={post.node.frontmatter.authorimage.childImageSharp.fluid} alt={post.node.frontmatter.author} />
              <p className="josefin" style={{color: "#333", fontSize: "12px"}}>written by {post.node.frontmatter.author}</p>
            </div>
          </article>
        </Link>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${tag} (${totalCount}件)`

    return (
      <Layout>
        <section className="section column is-10 is-offset-1" style={{paddingTop: "100px"}}>
          <div className="columns is-multiline">
            <Helmet title={`${tag} | ${title}`} />
            {postLinks}
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            author
            authorimage {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
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
`
