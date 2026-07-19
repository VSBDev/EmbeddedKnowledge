const values = (value) => Array.isArray(value) ? value : [];

export function validateLessonRightsContract({ lesson, references, attribution }) {
  const problems = [];
  const attributionText = typeof attribution === "string" ? attribution : "";

  for (const source of values(references?.sources)) {
    const expressiveUses = values(source.uses).filter((use) => use.usageType !== "factual-reference");
    if (expressiveUses.length && !attributionText.includes(source.id)) {
      problems.push(`ATTRIBUTION.md must name source ID ${source.id} because its expression, media, or dataset is reused.`);
    }
    for (const use of values(source.uses)) {
      if (use.rightsBasis === "cc-by-4.0" && !/CC\s*BY\s*4\.0/i.test(source.license || "")) {
        problems.push(`${source.id} claims a CC BY 4.0 reuse basis but its license field does not record CC BY 4.0.`);
      }
      if (use.rightsBasis === "cc0-1.0" && !/CC0\s*1\.0/i.test(source.license || "")) {
        problems.push(`${source.id} claims a CC0 1.0 reuse basis but its license field does not record CC0 1.0.`);
      }
    }
  }

  for (const asset of values(lesson?.thirdPartyAssets)) {
    if (asset.modified && !asset.modifications?.trim()) problems.push(`third-party asset ${asset.path} is modified but has no modification notice.`);
    if (!asset.modified && asset.modifications !== null) problems.push(`third-party asset ${asset.path} is unmodified but its modifications field is not null.`);
  }

  return problems;
}
