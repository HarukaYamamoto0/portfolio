import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Section from "../components/Section/Section";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="HomePage" description="">
      <div className={styles.body}>
        <main className={styles.main}>
          <h1 id="title">
            WELCOME TO MY LITTLE <span className="accent">WORLD</span>
          </h1>
          <p id="subtitle">
            Here, in addition to using it as a portfolio, I also use it to post
            my articles.
          </p>
          <div className={styles.main_btns_container}>
            <button className={styles.main_btns}>Portfolio</button>
            <button className={styles.main_btns}>Blog</button>
          </div>
        </main>

        <Section title="whoami">
          <div>
            Nice to meet you, my real name is Antônio Albert. I'm an Android
            Developer passionate about building mobile applications that enhance
            people's lives.
          </div>
        </Section>

        <Section title="about me">
          <div>
            Hello again, it seems like you’re interested to know more, so here’s
            a bit more about me:
            <br />
            <br />
            <span className="accent">Name:</span> Antonio Albert
            <br />
            <span className="accent">Date of Birth:</span> 01/12/2005
            <br />
            <span className="accent">Location:</span> Teresina, Piauí, Brazil
            <br />
            <br />
            My goal is to become a senior developer specializing in app
            development while staying rooted in the JavaScript ecosystem. I love
            creating tools that make life easier and push the boundaries of
            technology with every project.
          </div>
        </Section>

        <Section title="skills">
          <div>
            <p>Below are some of the technologies and tools I work with:</p>
            <ul className={styles.skillsList}>
              <li>JavaScript & TypeScript</li>
              <li>React & React Native</li>
              <li>Node.js</li>
              <li>Android Development</li>
              <li>Git & GitHub</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </Section>

        <Section title="projects">
          <div>
            Here are a few projects I’m currently working on:
            <ul className={styles.projectsList}>
              <li>
                <strong>TabNews Client:</strong> A mobile client for TabNews,
                created as a study project.
              </li>
              <li>
                <strong>Basner:</strong> This project will continue later, I
                will come back to it before the year is out, it will be a very
                interesting project.
              </li>
              <li>
                <strong>Locart:</strong> A powerful self-hosted image server!
              </li>
              <li>
                <strong>Merope:</strong> A cloud environment variable loader,
                increase your application security with Merope!
              </li>
            </ul>
            See more in{" "}
            <a href="https://github.com/HarukaYamamoto0#todo-list-">
              Todo List 📚
            </a>
          </div>
        </Section>

        <Section title="contacts">
          <div>
            <p>If you’d like to get in touch, feel free to reach out:</p>
            <p>
              <span className="accent">Discord Username:</span>{" "}
              <a href="https://discord.com/users/822819247146663936">
                albertthefluent
              </a>
            </p>
            <p>
              <span className="accent">Email:</span>{" "}
              <a href="mailto:harukayamamotodev@gmail.com">
                harukayamamotodev@gmail.com
              </a>
            </p>
            <p>
              <span className="accent">GitHub:</span>{" "}
              <a href="https://github.com/HarukaYamamoto0">
                github.com/HarukaYamamoto0
              </a>
            </p>
            <p>
              <span className="accent">Instagram:</span>{" "}
              <a href="https://instagram.com/harukadev">@harukadev</a>
            </p>
            <p>
              <span className="accent">Buy Me a Coffee:</span>{" "}
              <a href="https://www.buymeacoffee.com/harukayamamoto0">
                harukayamamoto0
              </a>
            </p>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
