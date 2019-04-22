module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'docs'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pozicie`,
        name: 'docs'
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    }
  ],
}