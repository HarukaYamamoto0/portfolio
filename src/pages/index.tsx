import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Section from "../components/Section/Section";
import Translate from "@docusaurus/Translate";
import { ICustomFields } from "../interfaces/ICustomFields";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { meta } = siteConfig.customFields as ICustomFields;

  return (
    <Layout title="Homepage" description={meta.description}>
      <div className={styles.body}>
        <main className={styles.main}>
          <h1 id="title">
            <Translate>BEM-VINDO AO MEU PEQUENO</Translate>{" "}
            <span className="accent">
              <Translate>MUNDO</Translate>
            </span>
          </h1>
          <p id="subtitle">
            <Translate>
              Aqui, além de usá-lo como portfólio, também o uso para postar meus
              artigos.
            </Translate>
          </p>
          <div className={styles.main_btns_container}>
            <button className={styles.main_btns}>Portfolio</button>
            <button className={styles.main_btns}>Blog</button>
          </div>
        </main>

        <Section title="whoami">
          <div>
            <Translate>
              Prazer em conhecê-lo, meu nome verdadeiro é Antônio Albert. Sou um
              desenvolvedor Android apaixonado por criar aplicativos móveis que
              melhorem a vida das pessoas.
            </Translate>
          </div>
        </Section>

        <Section title="aboutMe">
          <div>
            <Translate>
              Olá novamente, parece que você está interessado em saber mais,
              então aqui vai um pouco mais sobre mim:
            </Translate>
            <br />
            <br />
            <span className="accent">
              <Translate>Nome:</Translate>
            </span>{" "}
            Antonio Albert
            <br />
            <span className="accent">
              <Translate>Data de nascimento:</Translate>
            </span>{" "}
            01/12/2005
            <br />
            <span className="accent">
              <Translate>Onde moro:</Translate>
            </span>{" "}
            Teresina, Piauí, Brazil
            <br />
            <br />
            <Translate>
              Meu objetivo é me tornar um desenvolvedor sênior especializado em
              desenvolvimento de aplicativos, mantendo-me enraizado no
              ecossistema JavaScript. Adoro criar ferramentas que tornam a vida
              mais fácil e expandem os limites da tecnologia em cada projeto.
            </Translate>
          </div>
        </Section>

        <Section title="skills">
          <div>
            <p>
              <Translate>
                Abaixo estão algumas das tecnologias e ferramentas com as quais
                trabalho:
              </Translate>
            </p>
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
            <Translate>
              Aqui estão alguns projetos nos quais estou trabalhando atualmente:
            </Translate>
            <ul className={styles.projectsList}>
              <li>
                <strong>TabNews Client:</strong>{" "}
                <Translate>
                  Um cliente mobile para o TabNews, criado como um projeto de
                  estudo.
                </Translate>
              </li>
              <li>
                <strong>Basner:</strong>{" "}
                <Translate>
                  Este projeto continuará mais tarde, retornarei a ele antes do
                  fim do ano, será um projeto muito interessante.
                </Translate>
              </li>
              <li>
                <strong>Locart:</strong>{" "}
                <Translate>
                  Um poderoso servidor de imagens self-hosted!
                </Translate>
              </li>
              <li>
                <strong>Merope:</strong>{" "}
                <Translate>
                  Um carregador de variáveis ​​de ambiente de nuvem, aumente a
                  segurança do seu aplicativo com Merope!
                </Translate>
              </li>
            </ul>
            <Translate>Veja mais em: </Translate>{" "}
            <a href="https://github.com/HarukaYamamoto0#todo-list-">
              Todo List 📚
            </a>
          </div>
        </Section>

        <Section title="contacts">
          <div>
            <p>
              <Translate>
                Se você quiser entrar em contato, sinta-se à vontade para entrar
                em contato:
              </Translate>
            </p>
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
