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
        domains: ['api-sun.rolandadifandana.xyz'],
      },
      env: {
        baseApiUrl: process.env.BE_PRODUCTION_URL,
        baseImageUrl: 'http://api-sun.rolandadifandana.xyz',
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
