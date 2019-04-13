module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'docs'
      },
    },
    `gatsby-transformer-remark`,
  ],
}