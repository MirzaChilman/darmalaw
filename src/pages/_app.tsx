import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
