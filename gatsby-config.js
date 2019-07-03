module.exports = {
  siteMetadata: {
    title: 'Yomguithereal\'s Shenanigans',
    siteUrl: 'https://yomguithereal.github.io',
    githubUrl: 'https://github.com/Yomguithereal',
    twitterUrl: 'https://twitter.com/Yomguithereal'
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
