import type { Repo } from "@site/types/repo-types";
import axios from "axios";
import { writeFileSync, mkdirSync } from "node:fs";

const GITHUB_USERNAME = "HarukaYamamoto0";
const OUTPUT_PATH = `${process.cwd()}/src/data/`;
const OUTPUT_FILE = `${OUTPUT_PATH}repos.json`;
const MAIN_TAG = "portfolio";

async function fetchRepositories() {
  try {
    const response = await axios.get<Repo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    const repos = response.data
      .filter((repo) => repo.topics.includes(MAIN_TAG))
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        topics: repo.topics,
      }))
      .sort((a, b) => {
        if (a.stars > b.stars) return -1;
        if (a.stars < b.stars) return 1;
        return 0;
      });

    mkdirSync(OUTPUT_PATH, { recursive: true });

    writeFileSync(OUTPUT_FILE, JSON.stringify(repos, null, 2));
    console.log(`✅ Repositories saved in: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error fetching repositories: ", error.message);
  }
}

fetchRepositories();
