const path = require('path');
const env = process.env.NODE_ENV;

const allow = env === 'production' ? [false] : [true, false];

// Creating pages from MDX posts
exports.createPages = async function({actions, graphql}) {
  const {data} = await graphql(`
    query($allow: [Boolean]!) {
      allMdx(filter: {frontmatter: {type: {eq: "post"}, draft: {in: $allow}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `, {allow});

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
};

// Adding a context to index
exports.onCreatePage = function({page, actions: {createPage, deletePage}}) {
  if (page.path !== '/')
    return;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      allow
    }
  });
};
