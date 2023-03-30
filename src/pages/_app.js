import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
