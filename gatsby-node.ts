const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }: any) => {
  reporter.info("Your Gatsby site has been built!");
}

exports.onCreateNode = ({ node, getNode, actions }: any) => {
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

const Layout = path.resolve("src/pages/index.tsx");

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            category
          }
        }
      }
    }`);

    
    result.data.allMarkdownRemark.nodes.forEach((post:any) => {
      createPage({
        path: post.fields?.slug,
        component: Layout,
        context: {
          id: post.id,
          slug: post?.fields?.slug,
          category: post?.frontmatter?.category
        },
      })
  })
}

