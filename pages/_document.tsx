import { NextSeo } from "next-seo";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <NextSeo
          title={"LeetCV "}
          description="Create a professional resume in <10 min. Seek feedback & update with industry trends."
          key={
            "With LeetCV, Enhance with feedback, Professional Resume, Dynamic Resume, Resume with AI Support, Online Project Showcase, Online Career Timeline, A 'NO' PDF Resume,Peer Reviewed Resume, Private Sharable Resume"
          }
          canonical={`https://www.leetcv.com/`}
        />
        <Head>
          <meta
            name="description"
            content="A standout resume can increase your chances of landing your dream job. Spend 10 mins crafting an impressive one, and update it with industry trends. Continuously seek feedback to refine it and maximize your chances of success. Keep it concise and targeted to the job you're applying for."
          />
          <meta property="og:title" content="leetcv" />
          <meta property="og:site_name" content="leetcv" />
          <meta property="og:url" content="https://leetcv.com" />
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
