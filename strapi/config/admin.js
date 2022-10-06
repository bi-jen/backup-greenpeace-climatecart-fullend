module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9475cec36222b6135c4ecd8383d8d7c1'),
  },
});
