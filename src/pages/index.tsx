// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useState, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import cover from "@site/static/img/cover.webp";
import CarrotDown from "@site/static/img/icons/caret-down.svg";
import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  // const { siteConfig } = useDocusaurusContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = cover;
    img.onload = () => setLoaded(true);
  }, []);

  const handleScrollHintClick = () => {
    const firstSection = document.querySelector("section");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout
      title="Oh My Site — Android & Backend"
      description="Android & backend developer. Kotlin, Jetpack Compose, Ktor/Node.js. Writing about code, architecture, and shipping small monsters to prod."
    >
      {/* HERO */}
      <header
        className={`${styles.hero} ${loaded ? "fadeIn" : ""}`}
        style={{
          backgroundImage: loaded
            ? `url(${cover})`
            : "linear-gradient(180deg, #121212, #0a0a0a)",
        }}
      >
        <div className={styles.heroInner}>
          {/* <span className={styles.kicker}>Available for opportunities</span> */}
          <h1 className={styles.title}>
            Haruka <span className={styles.surname}>Dev</span>
          </h1>
          <p className={styles.subtitle}>
            Android & backend developer focused on <strong>Kotlin</strong>,
            <strong> Jetpack Compose</strong> and fast, reliable APIs with
            <strong> Ktor/Node.js</strong>.
          </p>

          {/* CTA buttons */}
          <nav className={styles.ctaRow} aria-label="Main calls to action">
            <Link className={styles.cta} to="/projects">
              View Projects
            </Link>
            <Link className={styles.cta} to="/blog">
              Read Articles
            </Link>
          </nav>

          {/* Skill badges */}
          <div className={styles.badges} aria-label="Skills badges">
            <span title="Kotlin">☕️ Kotlin</span>
            <span title="Android">🤖 Android</span>
            <span title="Node.js">🟢 Node.js</span>
            <span title="Typescript">🦖 Typescript</span>
          </div>
        </div>

        <div
          className={styles.scrollHint}
          onClick={handleScrollHintClick}
          aria-label="Scroll down"
        >
          <CarrotDown />
        </div>
      </header>

      {/* ========== HIGHLIGHTS ========== */}
      <section className={styles.highlights}>
        <header className={styles.sectionHeader}>
          <h2>Highlights</h2>
          <Link className={styles.sectionLink} to="/blog">
            See all →
          </Link>
        </header>

        <div className={styles.grid3}>
          <Link className={styles.cardLink} to="/blog/tags/jetpack-compose">
            <article className={styles.card}>
              <h3>Android • Jetpack Compose</h3>
              <p>
                Modern, accessible, and high-performance UI. MVVM architecture,
                testing, and API integration.
              </p>
              <Link className={styles.cardLink} to="/blog/tags/jetpack-compose">
                View posts
              </Link>
            </article>
          </Link>

          <Link className={styles.cardLink} to="/blog/tags/backend">
            <article className={styles.card}>
              <h3>Solid backends</h3>
              <p>
                Ktor/Node.js, authentication, caching, metrics, and CI/CD. A
                project designed to scale smoothly.
              </p>
              <Link className={styles.cardLink} to="/blog/tags/backend">
                View posts
              </Link>
            </article>
          </Link>

          <Link className={styles.cardLink} to="/projects">
            <article className={styles.card}>
              <h3>Open Source & Bots</h3>
              <p>
                Experience with bots (Discord) and useful automations, focusing
                on DX and good logging.
              </p>
              <Link className={styles.cardLink} to="/projects">
                Projects
              </Link>
            </article>
          </Link>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Recent Projects</h2>
          <Link className={styles.sectionLink} to="/projects">
            See all →
          </Link>
        </header>

        <div className={styles.grid3}>
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/HarukaYamamoto0/tabnews-app"
          >
            <article className={styles.project}>
              <div className={styles.projectMeta}>Backend • Ktor</div>

              <h3 className={styles.projectTitle}>TabNews App</h3>

              <p className={styles.projectDesc}>
                A faithful TabNews client built with Kotlin Multiplatform and
                designed for smooth UI behavior.
              </p>
              <div className={styles.projectActions}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardLink}
                  to="https://github.com/HarukaYamamoto0/tabnews-app"
                >
                  Source Code →
                </Link>
              </div>
            </article>
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            to="https://github.com/HarukaYamamoto0/Linko"
          >
            <article className={styles.project}>
              <div className={styles.projectMeta}>Android • Compose</div>
              <h3 className={styles.projectTitle}>Linko</h3>
              <p className={styles.projectDesc}>
                Quick-links app with Compose, Room, and REST integration. Clean
                architecture and instrumented tests.
              </p>
              <div className={styles.projectActions}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardLink}
                  to="https://github.com/HarukaYamamoto0/Linko"
                >
                  Source Code →
                </Link>
              </div>
            </article>
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            to="https://github.com/HarukaYamamoto0/alcyone"
          >
            <article className={styles.project}>
              <div className={styles.projectMeta}>Bots • Node.js</div>
              <h3 className={styles.projectTitle}>Alcyone</h3>
              <p className={styles.projectDesc}>
                Modular Discord bot with command generation, caching, and rate
                limits. Built with telemetry and tests.
              </p>
              <div className={styles.projectActions}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardLink}
                  to="https://github.com/HarukaYamamoto0/alcyone"
                >
                  Source Code →
                </Link>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ========== BLOG PREVIEW ========== */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Latest Articles</h2>
          <Link className={styles.sectionLink} to="/blog">
            See blog →
          </Link>
        </header>

        <div className={styles.grid3}>
          {recentPosts.items.slice(0, 3).map((item, index) => (
            <Link className={styles.cardLink} to={item.permalink}>
              <article className={styles.card} key={index}>
                <h3>{item.title}</h3>
                <Link className={styles.cardLink} to={item.permalink}>
                  See post
                </Link>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Contact</h2>
        </header>
        <p className={styles.contactText}>
          Let's talk about Android, backends, and creative ideas that become
          products?{" "}
          <a href="mailto:harukayamamotodev@gmail.com">
            harukayamamotodev@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  );
}
