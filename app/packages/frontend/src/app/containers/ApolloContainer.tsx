import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { PropsWithChildren } from "react"

const cache = new InMemoryCache()
const client = new ApolloClient({
    cache,
    uri:'http://localhost:5555'
})
const ApolloContainer = ({children}:PropsWithChildren) => {
    return (<ApolloProvider client={client} children={children} />)
}

export default ApolloContainer