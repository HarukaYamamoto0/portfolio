import React, { ReactElement, FC } from "react";
import styles from "./section.module.css";

interface ISectionOptions {
  title: string;
  children: ReactElement;
}

const Section: FC<ISectionOptions> = ({ title, children }) => (
  <section className={styles.section}>
    <h1>
      <span className="accent">$</span> {title}
    </h1>
    <hr className="rounded" />
    <p>{children}</p>
  </section>
);

export default Section;
