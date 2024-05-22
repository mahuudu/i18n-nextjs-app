const path = require('path')


module.exports = {
    devIndicators: {},
    publicRuntimeConfig: {
      theme: "DEFAULT",
      currency: "USD",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cloudfront.net',
          hostname: '**.cloudfront.net',
          port: '',
        }
      ],
    },
  
  };
  