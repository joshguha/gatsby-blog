require("dotenv").config({ path: __dirname + "/.env" })

module.exports = {
  siteMetadata: {
    title: "Josh Guha Blog",
    author: "Josh Guha",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
