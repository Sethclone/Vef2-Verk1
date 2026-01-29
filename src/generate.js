import fs from "node:fs/promises";
import { parseLine } from "./lib/parse.js";
import {
  generateQuestionHTML,
  generateQuestionCategoryHTML,
  generateIndexHtml
} from "./lib/html.js";

const MAX_QUESTIONS_PER_CATEGORY = 100;

async function main() {
  console.log("generating...");

  await fs.mkdir("./dist", { recursive: true });

  const content = await fs.readFile("./questions.csv", "utf-8");
  const lines = content.split("\n");

  const questions = lines.map(parseLine);

  const qualityHistoryQuestions = questions
    .filter((q) => q && q.categoryNumber === "4" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  const questionsHTML = qualityHistoryQuestions
    .map(generateQuestionHTML)
    .join("\n");

  const output = generateQuestionCategoryHTML("Saga", questionsHTML);
  const path = "./dist/saga.html";

  await fs.writeFile(path, output, "utf-8");

  const indexHtml = generateIndexHtml();
  await fs.writeFile("./dist/index.html", indexHtml, "utf-8");
}

main().catch((error) => {
  console.error("error generating", error);
});
