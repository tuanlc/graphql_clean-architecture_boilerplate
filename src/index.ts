import server from './application';

const port = process.env.PORT || 3000;

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
