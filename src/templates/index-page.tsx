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
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `85%`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-normal is-size-3-mobile is-size-2-tablet is-size-4-widescreen m-plus-rounded"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            opacity: 0.8,
            letterSpacing: "11px",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-normal is-size-5-mobile is-size-5-tablet is-size-5-widescreen josefin"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.5em',
            opacity: 0.8,
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div className="container ">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content column is-12" style={{ padding: "0 24px" }} >
                <div>
                  <h1 className="has-text-centered josefin" style={{ padding: "40px" }}>
                    {mainpitch.title}
                  </h1>
                </div>
                <div>
                  <p>{mainpitch.description}</p>
                </div>
              </div>
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
