import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = 'http://localhost:5000/graphql';

const link: ApolloLink = createHttpLink({
  fetch,
  uri: GRAPHQL_URL
});

export default withApollo(
  ({ initialState }: any) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
