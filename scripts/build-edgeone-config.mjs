import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = process.argv[2] ?? "dist";

// Blume has already normalized redirects from blume.config.ts for deployment.
const { redirects } = JSON.parse(await readFile(join(outputDirectory, "vercel.json"), "utf8"));
if (!Array.isArray(redirects) || redirects.length === 0) {
  throw new Error("Blume did not emit any redirects in dist/vercel.json");
}

const rules = redirects.map(({ source, destination, statusCode }) => {
  if (!source?.startsWith("/") || !destination?.startsWith("/") || statusCode !== 308) {
    throw new Error(`Expected a local 308 redirect: ${JSON.stringify({ source, destination, statusCode })}`);
  }
  return { source, destination, statusCode };
});

// Explicit directory deployments upload configuration from the artifact root.
await writeFile(join(outputDirectory, "edgeone.json"), `${JSON.stringify({ redirects: rules }, null, 2)}\n`);
console.log(`Generated ${outputDirectory}/edgeone.json with ${rules.length} permanent redirects`);
