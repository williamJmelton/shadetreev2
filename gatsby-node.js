const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // console.log(node.internal.type)
  if (node.internal.type === "ContentfulVapeJuiceBrand") {
    const slug = node.slug
    const id = node.contentful_id
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
  if (node.internal.type === "ContentfulVapeJuice") {
    const slug = node.slug
    const id = node.contentful_id
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulVapeJuiceBrand {
        edges {
          node {
            fields {
              slug
              id
            }
          }
        }
      }
      allContentfulVapeJuice {
        edges {
          node {
            fields {
              slug
              id
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulVapeJuiceBrand.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/brand.js`),
      context: {
        slug: node.fields.slug,
        id: node.fields.id
      },
    })
  })
  result.data.allContentfulVapeJuice.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/juice.js`),
      context: {
        slug: node.fields.slug,
        id: node.fields.id
      },
    })
  })
}
