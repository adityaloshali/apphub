// next.config.js
module.exports = {
  target: "serverless",
  distDir: 'out',
  poweredByHeader: false,
  images: {
    domains: ['cdn.shopify.com', 'localhost', 'backend-apphub', 'https://backend-apphub.herokuapp.com'],
  }
  // images: {
  //   loader: "cloudinary",
  //   path: "https://res.cloudinary.com/apphub-optimizer/image/upload/"
  // }
}