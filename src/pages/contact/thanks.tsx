import React from 'react';
import Layout from '../../components/Layout';
import {BlogRoll} from '../../components/BlogRoll';
import { Link } from 'gatsby';

export const thanksForInquiry =  () => (
  <Layout>
  <div className="container" style={{ paddingTop: '50px' }}>
    <div className="section" style={{ margin: '10px' }}>
      <div className="columns">
        <div className="is-paddingless column is-10 is-offset-1">
          <div className="content">
            <div className="column is-12">
              <h1>
                ご連絡ありがとうございます。
              </h1>
              <p>
                メッセージの送信が完了しました。ご返信が必要な場合、担当の者が追ってご連絡いたしますので、お手数ですが少々お待ちください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section" style={{ margin: '10px' }}>
      <div className="columns">
        <div className="is-paddingless column is-10 is-offset-1">
          <div className="content">
            <div className="column is-12">
              <div style={{ marginBottom: '30px' }}>
                <h1 className="headline has-text-weight-bold">
                  Latest Articles
                </h1>
              </div>
              <BlogRoll />
              <div>
                <Link
                  className="column is-12 btn-outline aldrich"
                  to="/articles"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Tags /> */}
    </div>
  </div>
  </Layout>
);
