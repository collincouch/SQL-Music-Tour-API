require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: "music_tour",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: "music_tour_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: "music_tour_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
