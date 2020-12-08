import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

interface IRecipeProps {
  data: any
}

class BlogRoll extends React.Component<IRecipeProps> {

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
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
                    {post.frontmatter.featuredimage ? (
                      <div
                        className="featured-thumbnail"
                        style={{ marginBottom: '20px' }}
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
                      style={{ marginBottom: '20px' }}
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
                  <ul
                    className="categorylist aldrich"
                    style={{ marginTop: '15px' }}
                  >
                    {post.frontmatter.tags.map((tag) => (
                      <li
                        key={tag + `category`}
                        className="tag-item"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}


export const BlogRollQuery = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          limit: 10
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featured: { eq: false }
            }
          }
          sort: {
            fields: [frontmatter___issuedAt]
            order: DESC
          }
        ) {
          edges {
            node {
              excerpt(truncate: true, pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                issuedAt(formatString: "YYYY.MM.DD HH:hh")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
);
