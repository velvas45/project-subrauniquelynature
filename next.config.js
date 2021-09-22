const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ['localhost:5000'],
      },
      env: {
        baseApiUrl: process.env.BE_URL,
        baseImageUrl: 'http://localhost:5000',
      },
    };
  } else {
    return {
      images: {
        domains: ['api.sunfurniture.id'],
      },
      env: {
        baseApiUrl: process.env.BE_PRODUCTION_URL,
        baseImageUrl: 'https://api.sunfurniture.id',
      },
    };
  }
};

// module.exports = {
//   images: {
//     domains: ['localhost:5000'],
//   },
//   env: {
//     baseApiUrl: process.env.BE_URL,
//     baseImageUrl: 'http://localhost:5000',
//   },
// };
