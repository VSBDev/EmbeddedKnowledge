#!/usr/bin/env node
/**
 * Stamp runtime-observed agent identity into a review or adjudication artifact.
 *
 * Agents cannot be trusted to report their own model. During the PREM-SCI-004 0.1.1 cycle two
 * of four runs misreported themselves: one declared `gemini-pro` / `1.0` while its runtime
 * served `gemini-2.5-pro`, and one declared `gpt-5.4` while its own startup banner printed
 * `gpt-5.6-sol` — the second immediately after being told a prior reviewer had just been
 * rejected for that. `review.schema.json` types `model` and `version` as free strings, so
 * neither `npm run validate` nor the review-provenance gate can detect the substitution.
 *
 * The workflow this supports: instruct the agent to emit the literal placeholder
 * PLACEHOLDER for system/provider/model/version, then stamp the four fields here from what the
 * CLI actually reported. The agent still owns every judgement — findings, verdict, dispositions,
 * limitations. Only the facts it demonstrably cannot report reliably are supplied by the operator.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const PLACEHOLDER = "RUNTIME-STAMPED";
const STAMPED_FIELDS = ["system", "provider", "model", "version"];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const artifactArgument = args.find((value) => !value.startsWith("--"));
const flag = (name) => {
  const hit = args.find((value) => value.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : undefined;
};

if (!artifactArgument) {
  console.error([
    "Usage: npm run provenance:stamp -- <artifact.json> --system=... --provider=... --model=... --version=... [--final-commit=SHA]",
    "",
    "Read the four values from the runtime, not from the agent's own output:",
    "  codex exec  -> the startup banner lines `model:` and `OpenAI Codex v<version>`",
    "  agy --print -> the --model you passed plus `agy --version`",
  ].join("\n"));
  process.exit(2);
}

const artifactPath = path.resolve(root, artifactArgument);
if (!fs.existsSync(artifactPath)) {
  console.error(`Artifact not found: ${artifactArgument}`);
  process.exit(1);
}

const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
const actor = artifact.reviewer ?? artifact.adjudicator;
if (!actor?.agent) {
  console.error("Artifact has neither reviewer.agent nor adjudicator.agent to stamp.");
  process.exit(1);
}

const problems = [];
const values = {};
for (const field of STAMPED_FIELDS) {
  const supplied = flag(field === "system" ? "system" : field);
  if (!supplied) problems.push(`--${field} is required.`);
  else values[field] = supplied;

  // Refusing to overwrite a non-placeholder is the point: if the agent wrote a concrete model
  // string, that string is exactly the unverifiable self-report this tool exists to prevent.
  if (actor.agent[field] !== PLACEHOLDER) {
    problems.push(`${field} is "${actor.agent[field]}", not the ${PLACEHOLDER} placeholder. Re-run the agent with instructions to emit the placeholder rather than its own guess.`);
  }
}

const finalCommit = flag("final-commit");
if (finalCommit !== undefined) {
  if (!/^[0-9a-f]{40}$/.test(finalCommit)) problems.push("--final-commit must be a 40-character SHA.");
  else if (artifact.finalCommit !== "PENDING-FINAL-COMMIT") {
    problems.push(`finalCommit is "${artifact.finalCommit}", not the PENDING-FINAL-COMMIT placeholder.`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

for (const field of STAMPED_FIELDS) actor.agent[field] = values[field];
if (finalCommit !== undefined) artifact.finalCommit = finalCommit;

fs.writeFileSync(artifactPath, `${JSON.stringify(artifact, null, 2)}\n`);
const kind = artifact.reviewer ? `${artifact.role} review` : "adjudication";
console.log(`Stamped ${kind} ${artifact.reviewId ?? artifact.adjudicationId}:`);
for (const field of STAMPED_FIELDS) console.log(`  ${field}: ${values[field]}`);
if (finalCommit !== undefined) console.log(`  finalCommit: ${finalCommit}`);
