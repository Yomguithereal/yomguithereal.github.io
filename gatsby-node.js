const path = require('path');

// Creating pages from MDX posts
exports.createPages = async function({actions, graphql}) {
  const {data} = await graphql(`
    query {
      allMdx(filter: {frontmatter: {type: {eq: "post"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(edge => {
    const data = edge.node.frontmatter;

    actions.createPage({
      path: `/posts/${data.slug}`,
      component: path.resolve('./src/templates/mdx-post.js'),
      context: {
        slug: data.slug
      }
    });
  });
}
