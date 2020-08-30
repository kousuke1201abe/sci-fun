import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Seo from '../components/Seo'
import Tags from '../components/Tags'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  link,
  featuredTags,
}) => (
  <div>
    <div className="container" style={{ padding: "50px 15px 0px 15px" }}>
      <div className="section" style={{ margin: "10px"}}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <h1 className="headline has-text-weight-bold" style={{ marginBottom: "30px"}}>
                  Featured Ariticle
                </h1>
              </div>
              <Link className="link" to={link}>
                <article className="columns is-multiline is-marginless">
                  <div className="is-parent column is-6">
                    <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} width="500" height="128" alt="イラスト1" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div className="is-parent column is-6">
                    <h2 className="has-text-weight-bold is-size-3 is-size-5-mobile" style={{lineHeight: "140%"}}>
                      {title}
                    </h2>
                    <p style={{ marginTop: "20px", lineHeight: "30px"}}>
                      {subheading}
                    </p>
                    <ul className="categorylist aldrich" style={{marginTop: "15px"}}>
                    {featuredTags.map(tag => (
                      <li key={tag + `category`} className="tag-item">
                        #{tag}
                      </li>
                    ))}
                  </ul>
                  </div>
                </article>
              </Link>
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
                <div style={{padding: "0px 15px"}}>
                  <h1 className="headline has-text-weight-bold">
                    Latest Articles
                  </h1>
                </div>
                <BlogRoll />
                <Link className="column is-12 btn-outline aldrich" to="/articles">
                  View All
                </Link>
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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Seo />
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        link={frontmatter.link}
        featuredTags={frontmatter.featuredTags}
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        link
        featuredTags
      }
    }
  }
`
