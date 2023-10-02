import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, DocumentNode } from '@apollo/client';

export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE}/environments/master`,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${process.env.CF_ACCESS_TOKEN}`,
    }
});

export const queryData = (schema: DocumentNode) => {
    const { loading, data } = useQuery(schema, { client });
    return {loading, data};
}

