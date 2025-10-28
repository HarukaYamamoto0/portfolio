import React, { JSX, type ReactNode } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BlogPostPageStructuredData from "@theme/BlogPostPage/StructuredData";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostPage";
import styles from "./customBlogPostPage.module.css";

function BlogPostPageContent({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { metadata, toc, frontMatter } = useBlogPost();
  const { nextItem, prevItem, title, date, authors, tags } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    image,
  } = frontMatter;

  return (
    <main className={clsx("container", styles.blogPostContainer)}>
      <article className={styles.blogPost}>
        <div className={styles.content}>
          <BlogPostItem>{children}</BlogPostItem>
        </div>

        {(nextItem || prevItem) && (
          <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
        )}
      </article>

      {!hideTableOfContents && toc.length > 0 && (
        <aside className={styles.toc}>
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        </aside>
      )}
    </main>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <Layout>
          <BlogPostPageContent>
            <BlogPostContent />
          </BlogPostPageContent>
        </Layout>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
