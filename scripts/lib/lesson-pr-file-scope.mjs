const lessonIdPattern = /^PREM-[A-Z]{3}-[0-9]{3}$/;

const sharedGeneratedFiles = new Set([
  "site/data/premed-lessons.json",
  "site/data/premed-progress.json"
]);

function validLessonIds(lessonIds) {
  return new Set((lessonIds || []).filter((lessonId) => lessonIdPattern.test(lessonId)));
}

export function isAllowedLessonGeneratedFile(file, lessonIds) {
  if (sharedGeneratedFiles.has(file)) return true;

  for (const lessonId of validLessonIds(lessonIds)) {
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
