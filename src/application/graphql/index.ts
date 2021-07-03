import { mergeRawSchemas } from './utils/mergeRawSchemas';
import { gql } from 'apollo-server';
import schemaShards from './schemaShards';

export const rawSchema = mergeRawSchemas(
  {
    typeDefs: [
      // we create empty main types, we can later extend them in the shards
      gql`
        type Query {
          _empty: String
        }

        type Mutation {
          _empty: String
        }

        type Subscription {
          _empty: String
        }
      `,
    ],
    resolvers: {},
  },
  schemaShards
);
