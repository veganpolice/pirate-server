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
    ssl: true,
      database: 'postgres://lyuxbvntyzrynz:c66dbf765b53be7055b590b025aa6923d52f9d70f47cfdd258130bdc358117de@ec2-174-129-18-247.compute-1.amazonaws.com:5432/d99fp6qm0ffebn' + `?ssl=true`,
      user:     'username',
      password: 'password'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}