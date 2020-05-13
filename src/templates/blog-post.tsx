import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import BlogNoteLink from '../components/BlogNoteLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  link,
  tags,
  title,
  helmet,
  author,
  authorimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section" style={{paddingTop: "100px"}}>
      {helmet || ''}
      <div className="container content blogpost">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="is-size-5-mobile is-size-4-widescreen has-text-weight-bold is-bold-light" style={{paddingLeft: "5px"}}>
              {title}
            </h1>
            {tags && tags.length ? (
              <div>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`} className="tag-item">
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <FontAwesomeIcon icon={faTag} style={{marginRight: "3px", color: "grey"}}/>
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={`/tags/${author.replace(" ", "-")}/`} style={{display: "flex", alignItems: "center"}}>
                  <Img style={{width: "25px", borderRadius: "50%", margin: "5px"}} fluid={authorimage.childImageSharp.fluid} alt={author} />
                  <p className="josefin" style={{color: "#333", fontSize: "12px"}}>written by {author}</p>
                </Link>
              </div>
            ) : null}
            <div style={{marginTop: "30px"}}>
              <PostContent content={content} />
              <BlogNoteLink link={link} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  link: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        link={post.frontmatter.link}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="link"
              content={`${post.frontmatter.link}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
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
        author
        authorimage {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        link
        tags
      }
    }
  }
`
