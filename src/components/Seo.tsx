import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

interface SiteMetadataType {
  title: string
  description: string
  image: string
}

const SEO = ({ title, description, image }) => {
  const meta : SiteMetadataType = useSiteMetadata()
  const url : string = "https://confident-euler-cf03d1.netlify.app"

  const seo = {
    title: title || meta.title,
    description: description || meta.description,
    image: image ? `${url}/img/${image}.jpg` : `${url}/img/og-image.jpg`,
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={seo.image}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

