import { BookType } from "./../TypeDefs/Book";
import { GraphQLList, GraphQLID } from "graphql";
import { Books } from "./../../entities/Books";

export const GET_ALL_Books = {
	type: new GraphQLList(BookType),
	resolve() {
		return Books.find();
	},
};

export const GET_Single_Book = {
	type: BookType,
	args: { id: { type: GraphQLID } },
	resolve(parent: any, args: any) {
		const book = Books.findOne(args.id);
		if (!book) {
			throw new Error("Book dose not exists!");
		}
		return book;
	},
};
