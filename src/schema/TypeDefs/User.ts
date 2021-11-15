import {
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} from "graphql";
import { Books } from "./../../entities/Books";
import { BookType } from "./Book";

export const UserType: any = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				//return _.filter(books, { authorId: parent.id });
				return Books.find({ authorId: parent.id });
			},
		},
	}),
});
