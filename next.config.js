/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {  // next config
      env: {
        mongodb_username: 'minh',
        mongodb_password: 'Minhanh1309',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'personal-blog-dev'
      },
    }
  }

  // PRODUCTION
  return {
    env: {  // next config
      mongodb_username: 'minh',
      mongodb_password: 'Minhanh1309',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'personal-blog'
    },
  }
}
