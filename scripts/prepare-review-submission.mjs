import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { assertSubmissionExpectations, fencedSubmission, structuredArtifactKind } from "./lib/review-submission.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : null;
};
const artifactArgument = args.find((argument, index) => !argument.startsWith("--") && (index === 0 || !args[index - 1]?.startsWith("--")));

if (!artifactArgument) {
  console.error("Usage: npm run review:prepare -- <artifact.json> [--candidate SHA] [--github-login LOGIN] [--state approved|changes_requested|commented] [--output FILE]");
  process.exit(2);
}

try {
  const artifactPath = path.resolve(root, artifactArgument);
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  const kind = structuredArtifactKind(artifact);
  const lessonSchema = JSON.parse(fs.readFileSync(path.join(root, "site/schemas/lesson.schema.json"), "utf8"));
  const artifactSchema = JSON.parse(fs.readFileSync(path.join(root, `site/schemas/${kind}.schema.json`), "utf8"));
  const policy = JSON.parse(fs.readFileSync(path.join(root, "site/agent/quorum-policy.json"), "utf8"));
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  ajv.addSchema(lessonSchema).addSchema(artifactSchema);
  const validate = ajv.getSchema(artifactSchema.$id);
  if (!validate(artifact)) throw new Error(ajv.errorsText(validate.errors, { separator: "; " }));

  assertSubmissionExpectations({
    artifact,
    policy,
    candidateCommit: option("--candidate"),
    githubLogin: option("--github-login"),
    state: option("--state")
  });
  const body = fencedSubmission(artifact);
  const output = option("--output");
  if (output) {
    fs.writeFileSync(path.resolve(output), body);
    console.error(`Prepared exact ${kind} submission from ${artifactArgument} at ${output}.`);
  } else {
    process.stdout.write(body);
  }
} catch (error) {
  console.error(`Review submission preflight failed: ${error.message}`);
  process.exit(1);
}
