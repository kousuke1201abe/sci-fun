import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SnsLinksfrom from '../components/SnsLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Seo from '../components/Seo'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  link,
  tags,
  title,
  helmet,
  issuedAt,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container" style={{padding: "70px 20px 0px 20px"}}>
      <section className="section">
        {helmet || ''}
        <div className="content blogpost">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns is-multiline">
                <div className="is-parent column is-6">
                  <ul className="taglist aldrich" style={{margin: "0px"}}>
                    {tags.map(tag => (
                      <li key={tag + `tag`} className="tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h1 className="is-size-5-mobile is-size-2-widescreen has-text-weight-bold is-bold-light is-marginless">
                    {title}
                  </h1>
                  <p className="aldrich" style={{color: "#333", fontSize: "18px", paddingTop: "15px"}}>{issuedAt}</p>
                </div>
                <div className="is-parent column is-6">
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
                <div style={{marginTop: "30px"}}>
                  <PostContent content={content} />
                  <div style={{marginTop: "30px"}}>
                    <SnsLinksfrom url={window.location.href} />
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
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        issuedAt={post.frontmatter.issuedAt}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        link
        tags
        description
        issuedAt
        featuredimage {
          name
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
