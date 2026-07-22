const lessonIdPattern = /^(?:PREM|PSY)-[A-Z]{3}-[0-9]{3}$/;

const sharedGeneratedFilesByPrefix = new Map([
  ["PREM-", new Set([
    "site/data/premed-lessons.json",
    "site/data/premed-progress.json",
    "site/data/premed-terminology.json"
  ])],
  ["PSY-", new Set([
    "site/data/psychiatry-lessons.json",
    "site/data/psychiatry-progress.json",
    "site/data/psychiatry-terminology.json"
  ])]
]);

function validLessonIds(lessonIds) {
  return new Set((lessonIds || []).filter((lessonId) => lessonIdPattern.test(lessonId)));
}

export function isAllowedLessonGeneratedFile(file, lessonIds) {
  for (const lessonId of validLessonIds(lessonIds)) {
    const courseFiles = [...sharedGeneratedFilesByPrefix.entries()].find(([prefix]) => lessonId.startsWith(prefix))?.[1];
    if (courseFiles?.has(file)) return true;
    if (file === `site/data/lessons/${lessonId}.json`) return true;
    if (file.startsWith(`site/assets/lessons/${lessonId}/`)) return true;
  }
  return false;
}

export function lessonPrOutsideFiles({ changedFiles, packPath, lessonIds }) {
  return changedFiles.filter((file) => (
    !file.startsWith(`${packPath}/`) && !isAllowedLessonGeneratedFile(file, lessonIds)
  ));
}

/**
 * Classify a complete removal of a pack that existed at the pull request base.
 * A removal is valid only when the pack directory is absent from the head, no
 * tracked files remain beneath it, and every pack-path change is a deletion.
 */
export function validateFullLessonPackRemoval({ baseMetadata, packExists, trackedFiles, changedEntries }) {
  const removed = Boolean(baseMetadata && !packExists);
  if (!removed) return { removed: false, errors: [] };

  const errors = [];
  if (trackedFiles.length) {
    errors.push(`A removed lesson pack must leave no tracked files; found: ${trackedFiles.join(", ")}.`);
  }
  const nonDeletions = changedEntries.filter((entry) => entry.status !== "D").map((entry) => entry.path);
  if (nonDeletions.length) {
    errors.push(`A lesson removal may contain only deletions inside the pack; found non-deletions: ${nonDeletions.join(", ")}.`);
  }
  return { removed: true, errors };
}
