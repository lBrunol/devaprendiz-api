module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e266032ad376077ec6aaa0d1b8bf85f'),
  },
});
