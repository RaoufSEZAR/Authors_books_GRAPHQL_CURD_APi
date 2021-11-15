import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_Single_USER } from "./Queries/User";
import { GET_ALL_Books, GET_Single_Book } from "./Queries/Book";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { CREATE_Book, DELETE_Book, UPDATE_BOOK } from "./Mutations/Book";

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		// READ USER
		getAllUsers: GET_ALL_USERS,
		getSingleUser: GET_Single_USER,

		// READ Book
		getAllBooks: GET_ALL_Books,
		getSingleBook: GET_Single_Book,
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		// CUD USER
		createUser: CREATE_USER,
		deleteUser: DELETE_USER,
		updatePassword: UPDATE_PASSWORD,

		// CUD Book
		createBook: CREATE_Book,
		deleteBook: DELETE_Book,
		updateBooK: UPDATE_BOOK,
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
