const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, "./server/dist"),
        devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 4200, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    },
  }