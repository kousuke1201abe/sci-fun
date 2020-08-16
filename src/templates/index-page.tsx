import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Seo from '../components/Seo'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  link,
}) => (
  <div>
    <div className="container" style={{ padding: "50px 15px 0px 15px" }}>
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <h1 className="is-size-5 has-text-weight-bold aldrich">
                  FEATURED ARTICLE
                </h1>
              </div>
              <Link className="link" to={link}>
                <article className="columns is-multiline is-marginless">
                  <div className="is-parent column is-6 has-text-centered">
                    <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} width="500" height="128" alt="イラスト1" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div className="is-parent column is-6 has-text-centered">
                    <h2 className="has-text-weight-bold is-size-2 is-size-5-mobile">
                      {title}
                    </h2>
                    <p style={{ marginTop: "20px", lineHeight: "30px"}}>
                      {subheading}
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <h1 className="is-size-5 has-text-weight-bold aldrich" style={{ padding: "0px 15px" }}>
                  LATEST ARTICLES
                </h1>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/articles">
                    MORE...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  link: PropTypes.string,
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
      }
    }
  }
`
