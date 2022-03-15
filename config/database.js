module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'won_games'),
      user: env('DATABASE_USERNAME', 'winterfell'),
      password: env('DATABASE_PASSWORD', 'Fanbno022!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
