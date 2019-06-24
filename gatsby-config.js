module.exports = {
  siteMetadata: {
    title: 'Yomguithereal\'s shenanigans',
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
