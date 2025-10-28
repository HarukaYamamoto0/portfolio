import { JSX, useState, useMemo } from "react";
import Layout from "@theme/Layout";
import styles from "./projects.module.css";
import projects from "@site/src/data/repos.json";
import Link from "@docusaurus/Link";

export default function Projects(): JSX.Element {
  const filters = useMemo(() => {
    const allTopics = new Set<string>();
    projects.forEach((p) => allTopics.add(p.language));
    return ["All", ...Array.from(allTopics).sort()];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (p) => activeFilter === "All" || p.language.includes(activeFilter)
      ),
    [activeFilter]
  );

  return (
    <Layout
      title="Projects — Haruka Dev"
      description="Projetos Android, backends e automações open-source criadas por Haruka Dev."
    >
      <main className={styles.wrapper}>
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              <em>Made with coffee, insomnia, and a touch of dark elegance.</em>
            </p>
            <p className={styles.description}>
              Some projects that reflect my style: functional, minimalist, and
              slightly chaotic.
            </p>
          </header>

          {/* Dynamic filters */}
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterButton} ${
                  f === activeFilter ? styles.filterActive : ""
                }`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className={styles.grid}>
            {filteredProjects.map((p) => (
              <Link
                target="_blank"
                rel="noreferrer"
                to={p.url}
                className={styles.link}
              >
                <article key={p.name} className={styles.card}>
                  <div className={styles.tech}>{p.language}</div>
                  <h2>{p.name}</h2>
                  <p>{p.description}</p>
                  {/* <div className={styles.tags}>
                    {p.topics.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div> */}
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to={p.url}
                    className={styles.link}
                  >
                    View Code →
                  </Link>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
