import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Seo from '../components/Seo'
import { kebabCase } from 'lodash'
import Pagenation from '../components/Pagenation'

class CategoryRoute extends React.Component<CategoryType> {
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
            <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.node.frontmatter.issuedAt}</p>
            <div className="is-flex" >
            <ul className="categorylist aldrich" style={{marginTop: "15px", display: "flex", flexWrap: "wrap"}}>
              {post.node.frontmatter.tags.map(tag => (
                <li key={tag + `category`} className="tag-item">
                  #{tag}
                </li>
              ))}
            </ul>
            </div>
          </article>
        </Link>
      </div>
    ))

    console.log(this.props.pageContext)
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const path = `/categories/${kebabCase(category)}`

    return (
      <Layout>
        <Seo />
        <div className="container" style={{paddingTop: "50px"}}>
          <section className="section column is-10 is-offset-1">
            <div className="column is-12" style={{marginBottom: "20px"}}>
              <h1 className="headline has-text-weight-bold">
                {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
              </h1>
            </div>
            <div className="columns is-multiline is-marginless">
              <Helmet title={`${category} | ${title}`} />
              {postLinks}
            </div>
            <Pagenation pageContext={this.props.pageContext} path={path}/>
          </section>
        </div>
      </Layout>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { in: [$category] } } }
      sort: { fields: [frontmatter___issuedAt], order: DESC }
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
            issuedAt(formatString: "YYYY.MM.DD HH:hh")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
