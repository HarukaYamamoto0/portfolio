import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./portfolio.module.css";

export default function Portfolio(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Hi" description="ol">
      <main className={styles.body}>
        <h1 id="title">
          WELCOME TO MY LITTLE <span className="accent">WORLD</span>
        </h1>
        <p id="subtitle">
          Here, in addition to using it as a portfolio, I also use it to post my
          articles.
        </p>
      </main>
    </Layout>
  );
}
