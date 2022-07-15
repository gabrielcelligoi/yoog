const { Pool } = require('pg');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

const pool = new Pool({
	user: "yoog",
	host: "localhost",
	password: "123",
	port: 5432,
	database: "yoogdb",
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = pool;