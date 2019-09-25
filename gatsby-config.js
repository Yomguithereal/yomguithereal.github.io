module.exports = {
  siteMetadata: {
    title: 'Yomguithereal\'s Shenanigans',
    siteUrl: 'https://yomguithereal.github.io',
    githubUrl: 'https://github.com/Yomguithereal',
    twitterUrl: 'https://twitter.com/Yomguithereal'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: false,
        contentPath: `${__dirname}/src/decks`,
        basePath: '/decks'
      }
    }
  ]
};
