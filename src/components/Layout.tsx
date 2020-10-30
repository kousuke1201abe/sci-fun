import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

interface SiteMetadataType {
  title: string
  description: string
}

const TemplateWrapper = ({ children }) => {
  const { title, description }: SiteMetadataType = useSiteMetadata()
  return (
    <div style={{maxWidth: "100%"}}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
