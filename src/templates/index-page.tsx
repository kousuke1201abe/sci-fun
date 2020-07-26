import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
}) => (
  <div>
    <div className="columns" style={{ paddingTop: "120px", paddingLeft: "40px", paddingRight: "40px" }}>
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline">
          <div className="is-parent column is-6 has-text-centered">
            <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} width="500" height="128" alt="イラスト1" style={{borderRadius: "5px"}}></img>
          </div>
          <div className="is-parent column is-6 has-text-centered">
            <h5 className="has-text-weight-bold">
              {title}
            </h5>
            {subheading}
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
                <h1 className="has-text-centered josefin" style={{ paddingTop: "40px" }}>
                  Latest Stories
                </h1>
                <BlogRoll />
                <div className="column is-12 has-text-centered josefin">
                  <Link className="btn" to="/stories">
                    More Stories
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
  mainpitch: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
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
        mainpitch {
          title
          description
        }
      }
    }
  }
`
