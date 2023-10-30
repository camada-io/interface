'use client'

import { ThemeProvider } from 'next-themes'
import { WagmiConfig } from 'wagmi'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { connectionConfig } from '@/connection'
import { typeDefs } from '@/Apollo/queries/typedefs'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
  typeDefs,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <WagmiConfig config={connectionConfig}>
        <ApolloProvider client={client}>{children}</ApolloProvider>,
      </WagmiConfig>
    </ThemeProvider>
  )
}
