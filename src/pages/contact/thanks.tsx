import React from 'react'
import Layout from '../../components/Layout'
import baku from '../../img/baku.png'

export default () => (
  <Layout>
    <div className="content" style={{ paddingTop: "100px" }}>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered" style={{ justifyContent: "center" }}>
              <img src={baku} alt="baku" style={{ height: '100px' }} />
              <h1 style={{ marginTop: '0px' }}>Thank you!</h1>
              <p>ご連絡ありがとうございます。ご返信まで、しばらくお待ちください。</p>
            </div>
          </div>
          </section>
        </div>
      </div>
  </Layout>
)
