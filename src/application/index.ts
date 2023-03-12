import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from 'graphql-tools';
import { rawSchema } from './graphql';

// create our schema
const schema = makeExecutableSchema(rawSchema);

// create a new server
export default new ApolloServer({
  schema,
});
