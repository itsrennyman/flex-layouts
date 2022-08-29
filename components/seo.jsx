import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <title>CSS Flexbox Layouts</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content="Examples of Flexbox layouts, served in a cool way!"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://flex-layouts.vercel.app/" />
      <meta property="og:title" content="CSS Flexbox Layouts" />
      <meta
        property="og:description"
        content="Examples of Flexbox layouts, served in a cool way!"
      />
      <meta
        property="og:image"
        content="https://og-image.vercel.app/**Flexbox%20Layouts**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://flex-layouts.vercel.app/" />
      <meta property="twitter:title" content="CSS Flexbox Layouts" />
      <meta
        property="twitter:description"
        content="Examples of Flexbox layouts, served in a cool way!"
      />
      <meta
        property="twitter:image"
        content="https://og-image.vercel.app/**Flexbox%20Layouts**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg"
      />
    </Head>
  );
};

export { SEO };
