import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'localhost:3000/api/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();