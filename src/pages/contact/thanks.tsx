import React from 'react'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <div className="content" style={{ paddingTop: "100px" }}>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column has-text-centered" style={{ justifyContent: "center", margin: "20px" }}>
              <h1 style={{ marginTop: '0px' }}>送信が完了しました。</h1>
              <p>ご連絡ありがとうございます。ご返信が必要な場合、担当の者が追ってご連絡致しますので、少々お待ちください。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)
