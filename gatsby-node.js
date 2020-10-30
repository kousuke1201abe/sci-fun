const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              categories
              templateKey
            }
          }
        }
      }
      categories: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
      tags: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.posts.edges

    posts.forEach(edge => {
      const id = edge.node.id
      const title = edge.node.frontmatter.title
      let category = ""
      if (edge.node.frontmatter.categories !== null) {
        category = edge.node.frontmatter.categories[0]
      }

      createPage({
        path: edge.node.fields.slug,
        categories: edge.node.frontmatter.categories,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id: id,
          title: title,
          category: category,
        },
      })
    })

    // categorie pages:
    const categories = result.data.categories.group
    // Iterate through each post, putting all found categories into `categories`

    // Make categorie pages
    categories.forEach(category => {
      const categoryPath = `/categories/${_.kebabCase(category.fieldValue)}/`
      const postsPerPage = 10
      const numPages = Math.ceil(category.totalCount / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoryPath : `${categoryPath}${i + 1}`,
          component: path.resolve(`src/templates/categories.tsx`),
          context: {
            category: category.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    })

    // tag pages:
    const tags = result.data.tags.group
    // Iterate through each post, putting all found tags into `tags`

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag.fieldValue)}/`
      const postsPerPage = 10
      const numPages = Math.ceil(tag.totalCount / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? tagPath : `${tagPath}${i + 1}`,
          component: path.resolve(`src/templates/tags.tsx`),
          context: {
            tag: tag.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    })

    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/articles` : `/articles/${i + 1}`,
        component: path.resolve("./src/templates/articles.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
