import { AlternateGrid } from "../components/alternate-grid";
import { Contribution } from "../components/contribution";
import { SEO } from "../components/seo";
import { VerticalStack } from "../components/vertical-stack";
import { Welcome } from "../components/welcome";

export default function Home() {
  return (
    <div>
      <SEO />
      <Welcome />
      <VerticalStack />
      <AlternateGrid />
      <Contribution />
    </div>
  );
}
