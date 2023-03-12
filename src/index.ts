import { startStandaloneServer } from '@apollo/server/standalone';
import server from './application';

startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: parseInt(process.env.PORT || '0') || 3000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
