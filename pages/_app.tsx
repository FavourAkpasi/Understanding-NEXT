import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="practice Next App" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
