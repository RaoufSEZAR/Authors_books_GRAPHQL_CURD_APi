import { UserType } from "./../TypeDefs/User";
import { GraphQLList, GraphQLID } from "graphql";
import { Users } from "./../../entities/Users";

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	resolve() {
		return Users.find();
	},
};

export const GET_Single_USER = {
	type: UserType,
	args: { id: { type: GraphQLID } },
	resolve(parent: any, args: any) {
		return Users.findOne(args.id);
	},
};
