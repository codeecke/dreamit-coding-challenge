import { ApolloClient, InMemoryCache, gql} from '@apollo/client';

export abstract class AbstractService {

    protected readonly client = new ApolloClient({
        uri: '/api/',
        cache: new InMemoryCache(),
    });

    protected query(literals: string | readonly string[], ...args: any[]) {
        return this.client.query({
            query: gql(literals)
        });
    }

}