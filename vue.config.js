module.exports = {
  outputDir: "dist",
  // publicPath: process.env.NODE_ENV === 'production'
  //     ? '/my-project/'
  //     : '/'
  //   devServer: {
  //     https: true
  //   }
  devServer: {
    disableHostCheck: true
  },
  
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
};
