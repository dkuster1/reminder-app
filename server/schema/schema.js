const graphql = require("graphql");
//const _ = require("lodash");
const Note = require("../models/note");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    timestamp: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        //return _.find(notes, { id: args.id });
        return Note.findById(args.id);
      }
    },
    notes: {
      type: new GraphQLList(NoteType),
      resolve(parent, args) {
        //return notes;
        return Note.find({});
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addNote: {
      type: NoteType,
      args: {
        content: { type: new GraphQLNonNull(GraphQLString) },
        timestamp: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let note = new Note({
          content: args.content,
          timestamp: args.timestamp
        });
        return note.save();
      }
    },
    deleteNote: {
      type: NoteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const removedNote = Note.findByIdAndRemove(args.id).exec();
        return removedNote;
      }
    },
    editNote: {
      type: NoteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        timestamp: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const updateNote = Note.findByIdAndUpdate(args.id, {
          content: args.content,
          timestamp: args.timestamp
        });
        return updateNote;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
