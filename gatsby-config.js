module.exports = {
  siteMetadata: {
    title: 'Yomguithereal\'s Shenanigans',
    siteUrl: 'https://yomguithereal.github.io'
  },
  plugins: [
    'gatsby-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    }
  ]
};
