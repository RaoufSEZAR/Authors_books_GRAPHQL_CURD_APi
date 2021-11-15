import { BookType } from "./../TypeDefs/Book";
import { MessageType } from "./../TypeDefs/Messages";
import { GraphQLString, GraphQLID } from "graphql";
import { Books } from "./../../entities/Books";

export const CREATE_Book = {
	type: BookType,
	args: {
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		authorId: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		let { name, genre, authorId } = args;
		await Books.insert({ name, genre, authorId });
		return args;
	},
};

export const UPDATE_BOOK = {
	type: MessageType,
	args: {
		id: { type: GraphQLID },
		newName: { type: GraphQLString },
		authorId: { type: GraphQLID },
		newGenre: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { id, newName, authorId, newGenre } = args;
		const book = await Books.findOne({ id, authorId });

		if (!book) {
			throw new Error("BOOK DOESNT EXIST");
		} else {
			await Books.update({ id }, { name: newName, genre: newGenre });
			return { successful: true, message: "Book UPDATED" };
		}
	},
};

export const DELETE_Book = {
	type: MessageType,
	args: {
		id: { type: GraphQLID },
		authorId: { type: GraphQLID },
	},
	async resolve(parent: any, args: any) {
		const { id, authorId } = args;

		const book = await Books.findOne({ id, authorId });
		if (!book) {
			return { successful: false, message: "the book dose not exist" };
		}
		if (book) {
			await Books.delete({ id, authorId });
			return { successful: true, message: "DELETE WORKED" };
		}
	},
};
