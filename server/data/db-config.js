const knex = require("knex");
require("dotenv").config()
const config = require("../../knexfile")

const env = process.env.NODE_ENV || "development"

module.exports = knex(config[env])