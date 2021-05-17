// next.config.js
module.exports = {
  target: "serverless",
  domains: ['cdn.shopify.com', 'localhost', 'backend-apphub', 'https://backend-apphub.herokuapp.com'],
  distDir: 'out',
  poweredByHeader: false,
  // images: {
  //   loader: "cloudinary",
  //   path: "https://res.cloudinary.com/apphub-optimizer/image/upload/"
  // }
}