import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const RelatedArticles = ({ posts }) => {
  return (
    <div className="section" style={{ margin: '10px' }}>
      <div className="columns">
        <div className="is-paddingless column is-10 is-offset-1">
          <div className="content">
            <div className="column is-12">
              <div style={{ marginBottom: '30px' }}>
                <h1 className="headline has-text-weight-bold">
                  Related Articles
                </h1>
              </div>
              <div className="columns is-multiline">
                {posts &&
                  posts.map(({ node: post }) => (
                    <div
                      className="is-parent column is-6"
                      key={post.id}
                    >
                      <Link to={post.fields.slug}>
                        <article className="blog-list-item tile is-child box">
                          <div>
                            {post.frontmatter
                              .featuredimage ? (
                              <div
                                className="featured-thumbnail"
                                style={{
                                  marginBottom: '20px',
                                }}
                              >
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image:
                                      post.frontmatter
                                        .featuredimage,
                                    alt: `featured image thumbnail for post ${post.title}`,
                                  }}
                                />
                              </div>
                            ) : null}
                            <p
                              className="post-meta"
                              style={{
                                marginBottom: '20px',
                              }}
                            >
                              <span className="is-size-5 has-text-weight-bold">
                                {post.frontmatter.title}
                              </span>
                            </p>
                          </div>
                          <p
                            className="aldrich"
                            style={{
                              color: 'gray',
                              fontSize: '10px',
                            }}
                          >
                            {post.frontmatter.issuedAt}
                          </p>
                          <div className="is-flex">
                            <ul
                              className="categorylist aldrich"
                              style={{ marginTop: '15px' }}
                            >
                              {post.frontmatter.tags.map(
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
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
