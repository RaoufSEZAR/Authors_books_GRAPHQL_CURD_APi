import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { Users } from "./../../entities/Users";
import { UserType } from "./User";

export const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		Author: {
			type: UserType,
			resolve(parent, args) {
				return Users.findOne(parent.authorId);
			},
		},
	}),
});
