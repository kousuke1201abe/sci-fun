import React from 'react';
import Layout from '../components/Layout';

const array = ['usa', 'uma', 'robo'];
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
            <h1 className="is-size-5">404 NOT FOUND...</h1>
            <img
              className="fas fa-lg"
              src={`/img/${image_name}.png`}
              alt={image_name}
              style={{ borderRadius: '5px' }}
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
