import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import TwitterLink from './TwitterLink'
import NoteLink from './NoteLink'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'


const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section box">
          <div className="has-text-centered">
            <div
              style={{
                width: '280px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px', marginTop: '40px' }}>
            <h4 style={{ marginBottom: 5, paddingRight: 5 }}>{item.name}</h4>
            <TwitterLink link={item.link} />
            <NoteLink link={item.link} />
          </div>
          <p>{item.text}</p>
          <Link to={`/tags/${kebabCase(item.name)}/`} className="josefin" style={{
            color: "#2b2523", paddingRight: "5px", fontSize: "18px"
            }}>
            Read Stories
          </Link>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
