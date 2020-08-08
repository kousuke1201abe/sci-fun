import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container" style={{paddingTop: "70px"}}>
          <section className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column is-12" style={{marginLeft: "20px"}}>
                    <h1 className="is-size-5 has-text-weight-bold aldrich">
                      ALL ARTICLES
                    </h1>
                  </div>
                </div>
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
