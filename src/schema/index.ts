import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_Single_USER } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		getAllUsers: GET_ALL_USERS,
		getSingleUser: GET_Single_USER,
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createUser: CREATE_USER,
		deleteUser: DELETE_USER,
		updatePassword: UPDATE_PASSWORD,
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
