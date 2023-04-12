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
          canonical={`https://www.leetcv.com/`}
        />
        <Head>
          <meta name="description" content="document meta data description" />
          <meta property="og:title" content="leetcv" />
          <meta property="og:site_name" content="leetcv" />
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
