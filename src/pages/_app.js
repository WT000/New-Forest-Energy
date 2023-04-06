import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Script from "next/script";

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
