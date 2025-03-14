import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./portfolio.module.css";
import ProjectCard from "@site/src/components/ProjectCard/ProjectCard";

import repos from "../../data/repos.json";
import type { JSX } from "react";
import Translate from "@docusaurus/Translate";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Projects" description="ol">
      <main>
        <h1 className={styles.title}>
          <Translate>MEUS PROJETINHOS</Translate>
        </h1>
        <p>
          <Translate>Meus principais projetos direto do github</Translate>
        </p>
        <div className={styles.projectGrid}>
          {repos.map((project, index) => (
            <ProjectCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index + 1}
              name={project.name}
              description={project.description}
              tags={project.topics}
              source={project.url}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
