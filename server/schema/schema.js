import { gql } from 'apollo-server-express';

// load schema
import definitions from './definitions';
import queries from './queries';
import mutations from './mutations';

export const TypesDefinitions = gql(definitions);

export const Resolvers = {
    Query: {
        ...queries
    },
    Mutation: {
        ...mutations
    }
};