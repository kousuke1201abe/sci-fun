import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column" style={{ paddingTop: "100px" }}>
                  <h1 className="has-text-weight-semibold has-text-centered josefin">Stories</h1>
                </div>
              </div>
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <BlogRoll />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}
