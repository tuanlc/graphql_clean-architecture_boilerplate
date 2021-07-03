import { ApolloServer, Config } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { handleGraphQLContext, handleGraphQLSubscriptionContext } from './auth/index';
import { rawSchema } from './graphql';

// create our schema
const schema = makeExecutableSchema(rawSchema);

// configure the server here
const serverConfig: Config = {
  schema,
  context: handleGraphQLContext,
  subscriptions: {
    onConnect: handleGraphQLSubscriptionContext,
  },
  playground: {
    settings: {
      'editor.theme': 'dark', // change to light if you prefer
      'editor.cursorShape': 'line', // possible values: 'line', 'block', 'underline'
    },
  },
};

// create a new server
export default new ApolloServer(serverConfig);
