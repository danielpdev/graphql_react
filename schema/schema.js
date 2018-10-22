const graphQL = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphQL;


const users = [
    {
        id: '23', firstName: 'Bill', age: 21
    },
    {
        id: '12', firstName: 'Jhon', age: 33
    }
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {id: args.id });
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
});