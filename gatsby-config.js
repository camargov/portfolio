require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        schemas: {
          homepage: require('./custom_types/homepage.json'),
          project: require('./custom_types/project.json'),
          footer: require('./custom_types/footer.json'),
          about_me: require('./custom_types/about-me.json'),
        }
      },
    },
  ],
};
