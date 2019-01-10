module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/pirateradio',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/pirateradio_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    ssl: true,
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}