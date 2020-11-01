module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'd4c.cbd0hyvbhp8l.us-east-2.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd4c_dev'),
        username: env('DATABASE_USERNAME', 'dropsforcrops'),
        password: env('DATABASE_PASSWORD', 'dropsforcrops'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
