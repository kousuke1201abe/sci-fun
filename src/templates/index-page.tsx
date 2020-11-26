import React from 'react';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import Seo from '../components/Seo';
import Tags from '../components/Tags';

export const IndexPageTemplate = ({ posts }) => (
  <div className="container" style={{ paddingTop: '50px' }}>
    <div className="section" style={{ margin: '10px' }}>
      <div className="columns">
        <div className="is-paddingless column is-10 is-offset-1">
          <div className="content">
            <div className="column is-12">
              <h1 className="headline has-text-weight-bold">
                Featured Articles
              </h1>
            </div>
            <div style={{ width: '100%' }}>
              <div
                className="columns is-multiline"
                style={{ maxWidth: '100%', margin: 'auto' }}
              >
                {posts &&
                  posts.map((post, index) =>
                    index === 0 ? (
                      <Link
                        to={post.node.fields.slug}
                        style={{ width: '100%' }}
                      >
                        <article className="columns is-multiline is-marginless">
                          <div className="is-parent column is-6">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image:
                                  post.node.frontmatter
                                    .featuredimage,
                                alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                              }}
                            />
                          </div>
                          <div className="is-parent column is-6">
                            <h2
                              className="has-text-weight-bold is-size-4 is-size-5-mobile"
                              style={{ lineHeight: '140%' }}
                            >
                              {post.node.frontmatter.title}
                            </h2>
                            <p
                              style={{
                                marginTop: '20px',
                                lineHeight: '30px',
                                color: '#333',
                                wordBreak: 'break-all',
                              }}
                            >
                              {
                                post.node.frontmatter
                                  .description
                              }
                            </p>
                            <p
                              className="aldrich"
                              style={{
                                color: 'gray',
                                fontSize: '10px',
                              }}
                            >
                              {
                                post.node.frontmatter
                                  .issuedAt
                              }
                            </p>
                            <ul
                              className="categorylist aldrich"
                              style={{ marginTop: '15px' }}
                            >
                              {post.node.frontmatter.tags.map(
                                (tag) => (
                                  <li
                                    key={tag + `category`}
                                    className="tag-item"
                                  >
                                    #{tag}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </article>
                      </Link>
                    ) : (
                      <div className="is-parent column is-6">
                        <Link to={post.node.fields.slug}>
                          <article className="blog-list-item tile is-child box">
                            <div
                              className="featured-thumbnail"
                              style={{
                                marginBottom: '20px',
                              }}
                            >
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image:
                                    post.node.frontmatter
                                      .featuredimage,
                                  alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                                }}
                              />
                            </div>
                            <h2
                              className="has-text-weight-bold is-size-5 is-size-5-mobile"
                              style={{ lineHeight: '140%' }}
                            >
                              {post.node.frontmatter.title}
                            </h2>
                            <p
                              className="aldrich"
                              style={{
                                color: 'gray',
                                fontSize: '10px',
                              }}
                            >
                              {
                                post.node.frontmatter
                                  .issuedAt
                              }
                            </p>
                            <ul
                              className="categorylist aldrich"
                              style={{ marginTop: '15px' }}
                            >
                              {post.node.frontmatter.tags.map(
                                (tag) => (
                                  <li
                                    key={tag + `category`}
                                    className="tag-item"
                                  >
                                    #{tag}
                                  </li>
                                ),
                              )}
                            </ul>
                          </article>
                        </Link>
                      </div>
                    ),
                  )}
              </div>
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
);

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark;

  return (
    <Layout>
      <Seo />
      <IndexPageTemplate posts={posts.edges} />
    </Layout>
  );
};


export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { featured: { eq: true } } }
      sort: {
        fields: [frontmatter___issuedAt]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            issuedAt(formatString: "YYYY.MM.DD HH:hh")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            description
          }
        }
      }
    }
  }
`;
