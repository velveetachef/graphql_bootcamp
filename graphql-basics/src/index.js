import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query';
        },
        name() {
            return 'JRock';
        },
        location() {
            return 'Bend';
        },
        bio() {
            return 'My bio';
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('Server is up');
});

