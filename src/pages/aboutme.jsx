import React from "react";
import Layout from "@theme/Layout";
import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <Layout
      title="About Me"
      description="Between commits and constellations, I create systems that breathe."
    >
      <main className={styles.container}>
        <section className={styles.header}>
          <h1>🌒 About Me</h1>
          <blockquote>
            “Between commits and constellations, I create systems that breathe.”
          </blockquote>

          <p>
            I'm <strong>Antonio Albert</strong>, though most people in the tech
            world know me as
            <strong>Haruka Yamamoto</strong>. I'm a developer driven by
            curiosity and a quiet obsession with understanding how everything
            works. My work lies somewhere between{" "}
            <strong>engineering and art</strong>: elegant codebases,
            human-centered design, and systems that express intention.
          </p>

          <p>
            I started programming out of fascination with how logic could shape
            imagination. Over time, it became something more—a way to explore
            meaning through structure. For me, writing code is like composing
            music: every function has rhythm, every pattern has tone, and every
            line contributes to a greater harmony. My goal has always been to
            make technology feel *alive*.
          </p>

          <p></p>
        </section>

        <hr />

        <section>
          <h2>🖤 Philosophy</h2>
          <blockquote>
            “Logic is just another form of poetry — structured, predictable, and
            sometimes cruelly beautiful.”
          </blockquote>
          <p>
            I’m fascinated by the emotional texture of software — how
            interaction, motion, and silence on screen can evoke something real.
            To me, good design isn’t decoration; it’s empathy expressed through
            structure. I find beauty in modular architectures, in naming that
            feels deliberate, and in projects that balance discipline with soul.
          </p>

          <p>
            Most of my best ideas come at night, when the world is quiet enough
            for logic to sound like music. A bit of coffee, low lights, and
            lines of code that slowly turn into something that *feels* right —
            that’s the space where I belong.
          </p>
        </section>

        <hr />

        <section>
          <h2>⚙️ Stack & Interests</h2>
          <ul>
            <li>
              <strong>Android / Jetpack Compose</strong> — crafting intuitive,
              expressive UI with a strong architectural backbone.
            </li>
            <li>
              <strong>Kotlin Backend (Ktor / Spring Boot)</strong> — building
              APIs that emphasize clarity, scalability, and thoughtful design.
            </li>
            <li>
              <strong>TypeScript / Node / Bun</strong> — where I experiment,
              automate, and push performance boundaries.
            </li>
            <li>
              <strong>Design & UX</strong> — exploring the intersection between
              structure and emotion, function and form.
            </li>
            <li>
              <strong>Automation & AI</strong> — fascinated by how human
              creativity adapts to intelligent systems.
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>🦋 Identity</h2>
          <p>
            The name <strong>Haruka Yamamoto</strong> represents my calm,
            introspective, and reflective nature — the side that observes
            patterns and finds beauty in silence. The name{" "}
            <strong>Atsuko Akemi</strong> symbolizes the other half: the
            artistic flame that burns quietly behind each project, the side that
            seeks connection rather than perfection.
          </p>

          <p>
            Together, they define who I am — a developer who writes systems like
            sonnets: not to impress, but to understand. I’m always searching for
            balance between creation and control, precision and chaos, logic and
            emotion.
          </p>
        </section>

        <hr />

        <section>
          <h2>🌘 Contact</h2>
          <p>
            I’m open to collaborations, creative partnerships, or conversations
            about design, architecture, and software that moves people. Whether
            you’re building a product, an idea, or a dream — I’d love to hear
            from you.
          </p>

          <ul>
            <li>
              📫{" "}
              <a href="mailto:harukayamamotodev@gmail.com">
                harukayamamotodev@gmail.com
              </a>
            </li>
            <li>
              🐙{" "}
              <a
                href="https://github.com/HarukaYamamoto0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/harukadev
              </a>
            </li>
            <li>
              🌐{" "}
              <a
                href="https://harukadev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                harukadev.com
              </a>
            </li>
          </ul>

          <blockquote>
            “The future is just a <code>.md</code> file I’m still writing.”
          </blockquote>
        </section>
      </main>
    </Layout>
  );
}
