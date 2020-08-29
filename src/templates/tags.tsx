import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Seo from '../components/Seo'
import { kebabCase } from 'lodash'

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
            <div className="post-meta is-size-5 has-text-weight-bold" style={{ marginBottom: "20px" }}>
                {post.node.frontmatter.title}
            </div>
            <p style={{ marginBottom: "10px" }}>
              {post.node.excerpt}
            </p>
            <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.node.frontmatter.issuedAt}</p>
          </article>
        </Link>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const path = `/tags/${kebabCase(tag)}`
    const prevPage = currentPage - 1 === 1 ? path : `${path}/${(currentPage - 1).toString()}`
    const nextPage = `${path}/${(currentPage + 1).toString()}`

    return (
      <Layout>
        <Seo />
        <div className="container" style={{paddingTop: "50px"}}>
          <section className="section column is-10 is-offset-1">
            <div className="column is-12" style={{marginLeft: "20px"}}>
              <h1 className="headline has-text-weight-bold">
                #{tag}
              </h1>
            </div>
            <div className="columns is-multiline is-marginless">
              <Helmet title={`${tag} | ${title}`} />
              {postLinks}
            </div>
            <div className="has-text-centered" style={{ margin: "20px" }}>
              {!isFirst && (
                <Link to={prevPage} rel="prev" className="btn" style={{ margin: "5px" }}>
                  Prev
                </Link>
              )}
              {!isLast && (
                <Link to={nextPage} rel="next" className="btn" style={{ margin: "5px" }}>
                  Next
                </Link>
              )}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      skip: $skip
      limit: $limit
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
            issuedAt
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
`
