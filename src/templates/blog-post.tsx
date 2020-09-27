import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SnsShare from '../components/SnsShare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import RelatedArticles from '../components/RelatedArticles'
import Seo from '../components/Seo'
import GlobalCss from '../components/GlobalCss'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  link,
  categories,
  tags,
  title,
  helmet,
  issuedAt,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container" style={{padding: "70px 10px 0px 10px"}}>
      <section className="section">
        {helmet || ''}
        <div className="content blogpost">
          <div className="columns">
            <div className="column is-6 is-offset-one-quarter">
              <div className="columns is-multiline">
                <div className="is-parent column is-12">
                  <ul className="categorylist aldrich" style={{margin: "0px"}}>
                    {categories.map(category => (
                      <li key={category + `category`} className="category-item">
                        {category}
                      </li>
                    ))}
                  </ul>
                  <h1 className="is-size-5-mobile is-size-2-widescreen has-text-weight-bold is-bold-light is-marginless" style={{lineHeight: "140%"}}>
                    {title}
                  </h1>
                  <div style={{marginTop: "20px"}}>
                    {featuredimage ? (
                      <div className="featured-thumbnail" style={{marginBottom: "20px"}}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: featuredimage,
                            alt: `featured image thumbnail for post ${title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <p className="aldrich" style={{color: "grey", fontSize: "12px", paddingTop: "10px"}}>{issuedAt}</p>
                  <ul className="categorylist aldrich" style={{marginTop: "10px"}}>
                    {tags.map(tag => (
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <li key={tag + `category`} className="tag-item">
                          #{tag}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
                <div style={{marginTop: "30px"}}>
                  <PostContent content={content} />
                  <div style={{marginTop: "30px"}}>
                    <SnsShare url={typeof window !== "undefined" ? window.location.href : ""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  link: PropTypes.string,
  title: PropTypes.string,
  issuedAt: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post, related: related } = data

  return (
    <Layout>
      <GlobalCss />
      <Seo
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage.name}
      />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        link={post.frontmatter.link}
        helmet={
          <Helmet titleTemplate="%s | Articles">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="link"
              content={`${post.frontmatter.link}`}
            />
          </Helmet>
        }
        categories={post.frontmatter.categories}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        issuedAt={post.frontmatter.issuedAt}
        featuredimage={post.frontmatter.featuredimage}
      />
      <RelatedArticles posts={related.edges}/>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    related: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $category: String!, $title: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        link
        categories
        tags
        issuedAt(formatString: "YYYY.MM.DD HH:hh")
        featuredimage {
          name
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    related :allMarkdownRemark(
      filter: { frontmatter: { categories: { in: [$category] }, title: { ne: $title } } }
      sort: { fields: [frontmatter___issuedAt], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
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
