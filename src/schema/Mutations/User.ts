import { UserType } from "./../TypeDefs/User";
import { MessageType } from "./../TypeDefs/Messages";
import { GraphQLString, GraphQLID } from "graphql";
import { Users } from "./../../entities/Users";
import CryptoJS from "crypto-js";

export const CREATE_USER = {
	type: UserType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		let { name, username, password } = args;
		password = CryptoJS.AES.encrypt(
			password,
			process.env.SECRET_KEY as string
		).toString();
		await Users.insert({ name, username, password });
		return args;
	},
};

export const UPDATE_PASSWORD = {
	type: MessageType,
	args: {
		username: { type: GraphQLString },
		oldPassword: { type: GraphQLString },
		newPassword: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { username, oldPassword, newPassword } = args;
		const user = await Users.findOne({ username: username });

		if (!user) {
			throw new Error("USERNAME DOESNT EXIST");
		}

		const userPassword = user?.password;
		// Decrypt password
		const bytes = CryptoJS.AES.decrypt(
			userPassword,
			process.env.SECRET_KEY as string
		);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

		//compare the password
		if (oldPassword === originalPassword) {
			const hasedPassword = CryptoJS.AES.encrypt(
				newPassword,
				process.env.SECRET_KEY as string
			).toString();

			await Users.update({ username: username }, { password: hasedPassword });

			return { successful: true, message: "PASSWORD UPDATED" };
		} else {
			throw new Error("PASSWORDS DO NOT MATCH!");
		}
	},
};

export const DELETE_USER = {
	type: MessageType,
	args: {
		id: { type: GraphQLID },
	},
	async resolve(parent: any, args: any) {
		const id = args.id;
		await Users.delete(id);

		return { successful: true, message: "DELETE WORKED" };
	},
};
