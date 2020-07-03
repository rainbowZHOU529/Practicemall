const path = require("path")

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  lintOnSave: false,
  
  configureWebpack:{
    resolve:{
      alias:{
        // 'assets':resolve('src/assets'),
        'assets':path.resolve(__dirname,'src/assets'),
        'common':path.resolve(__dirname,'src/common'),
        'components':path.resolve(__dirname,'src/components'),
        'views':path.resolve(__dirname,'src/views'),
        'network':path.resolve(__dirname,'src/network')
      }
    }
  }
}
