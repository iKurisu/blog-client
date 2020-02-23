const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articles = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  articles.data.allStrapiArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve("./src/components/story.tsx"),
      context: { slug: node.slug },
    })
  })
}
