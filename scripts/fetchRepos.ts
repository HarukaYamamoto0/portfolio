import axios from "axios";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const GITHUB_USERNAME = "HarukaYamamoto0";
const OUTPUT_PATH = join(process.cwd(), "src", "data");
const OUTPUT_FILE = join(OUTPUT_PATH, "repos.json");
const MAIN_TAG = "portfolio";

interface IRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  language: string;
}

async function fetchRepositories() {
  try {
    console.log("🔍 Fetching GitHub repositories...");

    const response = await axios.get<IRepo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    const repos = response.data
      .filter((repo) => repo.topics?.includes(MAIN_TAG))
      .map((repo) => ({
        name: repo.name,
        description: repo.description ?? "No description.",
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language ?? "Unknown",
        topics: repo.topics,
        updated: new Date(repo.updated_at).toISOString().split("T")[0],
      }))
      .sort((a, b) => b.stars - a.stars);

    mkdirSync(OUTPUT_PATH, { recursive: true });
    writeFileSync(OUTPUT_FILE, JSON.stringify(repos, null, 2));

    console.log(`✅ ${repos.length} repositories saved in: ${OUTPUT_FILE}`);
  } catch (error: any) {
    console.error("❌ Error fetching repositories:", error.message);
    process.exit(1);
  }
}

fetchRepositories();
