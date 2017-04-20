module.exports = {
  env: {
    DEBUG: process.env.NODE_ENV !== 'production',
    SERVER_PORT: process.env.PORT || 3001,
    API_PORT: 3002,
    DEV_SERVER_PORT: 3003,
    HOST: process.env.HOST || 'localhost'
  },
  MOUNT_ID: 'root',
  cssName: 'style.css',
  appName: 'main'
};
