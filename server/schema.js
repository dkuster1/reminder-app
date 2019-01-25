const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    id: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    note: {
      type: NoteType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
