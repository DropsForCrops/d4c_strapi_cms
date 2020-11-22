module.exports = ({ env }) => ({
  host: env('HOST', '35.156.82.214'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f1afc05b6b2727121c462b4e42e98527'),
    },
  },
});
