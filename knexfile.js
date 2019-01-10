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
    connection: {
      database: 'postgres://ewixdglbwyolce:53218838852e4fdae2543235d94dc7f6a293aad7c3ae756757518f551c2f2d46@ec2-107-20-183-142.compute-1.amazonaws.com:5432/ddo1tj0h9rma0l',
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