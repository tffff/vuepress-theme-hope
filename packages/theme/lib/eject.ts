import { relative, resolve } from "path";
import chalk from "chalk";
import { copy } from "fs-extra";

const EXCLUDED_FILES = [
  "__tests__",
  ".npmignore",
  "test",
  "LICENSE",
  "package.json",
  "node_modules",
  "README.md",
  "readme.md",
];

export default async (dir: string): Promise<void> => {
  try {
    const sourceDir = resolve(__dirname, "../");
    const targetDir = resolve(resolve(dir), ".vuepress/theme");

    await copy(sourceDir, targetDir, {
      filter: (src) => {
        return !EXCLUDED_FILES.includes(relative(sourceDir, src));
      },
    });

    console.log(`Copied vuepress-theme-hope into ${chalk.cyan(targetDir)}.\n`);
  } catch (err) {
    console.error(chalk.red((err as Error).stack || ""));
    process.exitCode = 1;
  }
};
