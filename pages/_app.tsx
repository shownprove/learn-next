import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div>전역설정입니다. 항상 보여야 해요.</div>
      <style jsx>
        {`
          div {
            text-align: center;
            font-size: 50px;
          }
        `}
      </style>
    </Layout>
  );
}

export default MyApp;
