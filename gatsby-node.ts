const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info("Your Gatsby site has been built!");
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value: slug,
        })
    }
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Layout = path.resolve("src/pages/index.tsx");

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      path: post.fields?.slug,
      component: Layout,
      context: {
        id: post.id,
        slug: post.fields?.slug
      },
    })
  })
}

