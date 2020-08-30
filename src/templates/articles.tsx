import * as React from 'react'

import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Seo from '../components/Seo'
import Pagenation from '../components/Pagenation'

export const ArticlesTemplate = ({
  allMarkdownRemark
}) => {
  const { edges: posts } = allMarkdownRemark

  return (
    <div className="container" style={{paddingTop: "50px"}}>
      <section className="section">
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className="column is-12" style={{marginBottom: "20px"}}>
              <h1 className="headline has-text-weight-bold">
                All Articles
              </h1>
            </div>
          </div>
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
                      <p className="aldrich" style={{color: "gray", fontSize: "10px"}}>{post.frontmatter.issuedAt}</p>
                      <ul className="categorylist aldrich" style={{marginTop: "15px", display: "flex", flexWrap: "wrap"}}>
                        {post.frontmatter.tags.map(tag => (
                          <li key={tag + `category`} className="tag-item">
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const Articles = ({ data, pageContext }) => {
  const path = `/articles`

  return (
    <Layout>
      <Seo />
      <ArticlesTemplate
        allMarkdownRemark={data.allMarkdownRemark}
      />
      <Pagenation pageContext={pageContext} path={path}/>
    </Layout>
  )
}


export default Articles

export const pageQuery = graphql`
  query BlogRoll($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___issuedAt], order: DESC }
      skip: $skip
      limit: $limit
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
            issuedAt(formatString: "YYYY.MM.DD HH:hh")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
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
