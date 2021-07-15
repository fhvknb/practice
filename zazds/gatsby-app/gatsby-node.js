/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()

  //   config.output.publicPath = "http://qw7nj6uln.hn-bkt.clouddn.com/"
  console.log(stage)

  if (stage === "build-javascript" || stage === "build-html") {
    config.devtool = false
  }

  actions.replaceWebpackConfig(config)
}
