import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const AuthorsPageTemplate = ({
  heading,
  main,
  description,
}) => (
  <div className="content ">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column has-text-centered" style={{ paddingTop: "100px" }}>
            <h1 className="has-text-weight-semibold josefin">{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Features gridItems={main.authors} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

AuthorsPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    authors: PropTypes.array,
  }),
}

const AuthorsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AuthorsPageTemplate
        description={frontmatter.description}
        heading={frontmatter.heading}
        main={frontmatter.main}
      />
    </Layout>
  )
}

AuthorsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AuthorsPage

export const authorsPageQuery = graphql`
  query AuthorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        main {
          authors {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            text
            name
          }
        }
      }
    }
  }
`
