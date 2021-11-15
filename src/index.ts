import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./schema";
import { Users } from "./entities/Users";
import { Books } from "./entities/Books";
require("dotenv").config();
const port = 3001;
const main = async () => {
	await createConnection({
		type: "mysql",
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		logging: true,
		synchronize: false,
		entities: [Users, Books],
	});
	const app = express();
	app.use(express.json());
	app.use(cors());
	app.use(
		"/graphql",
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);
	app.listen(port, () => {
		console.log(`Server listen on port ${port}`);
	});
};

main().catch((err) => {
	console.log(err);
});
