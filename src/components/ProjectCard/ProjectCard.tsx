import type { FC } from "react";
import styles from "./ProjectCard.module.css";

interface IProjectCardOptions {
  name: string;
  description: string;
  tags: string[];
  source: string;
}

const ProjectCard: FC<IProjectCardOptions> = ({
  name,
  description,
  tags,
  source,
}) => (
  <div className={styles.card}>
    <h2>{name}</h2>
    <p>{description}</p>
    <div className={styles.techList}>
      {tags.map((tech, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className={styles.tech}>
          {tech}
        </span>
      ))}
    </div>
    <a href={source} target="_blank" rel="noopener noreferrer">
      Ver no GitHub
    </a>
  </div>
);

export default ProjectCard;
