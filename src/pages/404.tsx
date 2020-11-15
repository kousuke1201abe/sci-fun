import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const array = ['404_01', '404_02'];
const image_name =
  array[Math.floor(Math.random() * array.length)];

const NotFoundPage = () => (
  <Layout>
    <div
      className="container"
      style={{ paddingTop: '50px', paddingBottom: '50px' }}
    >
      <section
        className="section"
        style={{ margin: '30px' }}
      >
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-centered">
            <img
              className="fas fa-lg"
              src={`/img/${image_name}.jpg`}
              alt={image_name}
              style={{ borderRadius: '5px' }}
            />
          </div>
        </div>
        <p className="has-text-centered">お探しのページが見つかりませんでした。</p>
        <p className="has-text-centered">お困りの場合は、お手数ですが<Link to="/contact">お問い合わせページ</Link>までご連絡ください。</p>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
