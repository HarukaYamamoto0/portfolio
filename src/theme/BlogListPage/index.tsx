import { ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import type { Props } from "@theme/BlogListPage";
import styles from "./customBlogList.module.css";

export default function BlogListPage({ metadata, items }: Props): ReactNode {
  const { blogTitle, blogDescription } = metadata;

  const tags = ["Linux", "Kotlin", "Compose", "Backend"];

  return (
    <Layout title={blogTitle} description={blogDescription}>
      <main className={styles.blogWrapper}>
        <div className={styles.blogMain}>
          {items.map(({ content: BlogPostContent }, index) => {
            const { metadata } = BlogPostContent;
            const { title, description, permalink, date, frontMatter } =
              metadata;
            const image = frontMatter?.image ?? "/img/posts/default-cover.webp";
            const isEven = index % 2 === 0;

            return (
              <article
                key={permalink}
                className={clsx(styles.blogCard, { [styles.reverse]: !isEven })}
              >
                <div className={styles.cardImage}>
                  <img src={image} alt={title} loading="lazy" />
                </div>
                <div className={styles.cardContent}>
                  <h2>
                    <Link to={permalink}>{title}</Link>
                  </h2>
                  <p className={styles.excerpt}>{description}</p>
                  <small className={styles.meta}>
                    {new Date(date).toLocaleDateString()} —{" "}
                    {frontMatter.tags?.join(", ")}
                  </small>
                  <Link className={styles.readMore} to={permalink}>
                    Read more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3>Tags</h3>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <Link to={`/blog/tags/${tag.toLowerCase()}`}>{tag}</Link>
              ))}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3>Timeline</h3>
            <ul className={styles.timeline}>
              {items.map(({ content: BlogPostContent }) => {
                const { metadata } = BlogPostContent;
                const { title, permalink, date } = metadata;
                const dateStr = new Date(metadata.date).toLocaleDateString();
                return (
                  <li key={permalink}>
                    <span>{dateStr}</span>
                    <Link to={permalink}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </main>
    </Layout>
  );
}
