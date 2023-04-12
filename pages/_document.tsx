import { NextSeo } from "next-seo";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <NextSeo
          title={"LeetCV "}
          description="Create a professional resume in <10 min. Seek feedback & update with industry trends."
          key={"document meta data"}
        />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
