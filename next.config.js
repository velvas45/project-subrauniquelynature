module.exports = {
  images: {
    domains: ['localhost:5000'],
  },
  env: {
    baseApiUrl: process.env.BE_URL,
    baseImageUrl: 'http://localhost:5000',
  },
};
