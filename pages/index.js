import Head from "next/head";
import { AlternateGrid } from "../components/alternate-grid";
import { Contribution } from "../components/contribution";
import { VerticalStack } from "../components/vertical-stack";
import { Welcome } from "../components/welcome";

export default function Home() {
  return (
    <div>
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
      </Head>

      <Welcome />
      <VerticalStack />
      <AlternateGrid />
      <Contribution />
    </div>
  );
}
