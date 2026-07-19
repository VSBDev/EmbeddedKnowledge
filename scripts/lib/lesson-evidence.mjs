const values = (value) => Array.isArray(value) ? value : [];

export function validateLessonEvidenceContract({ lesson, claims, references, sourceNotes }) {
  const problems = [];
  const lessonScenes = values(lesson?.scenes);
  const claimRecords = values(claims?.claims);
  const sourceRecords = values(references?.sources);
  const notes = values(sourceNotes);
  const sceneIds = new Set(lessonScenes.map((scene) => scene.id));
  const claimById = new Map(claimRecords.map((claim) => [claim.id, claim]));
  const sourceIds = new Set(sourceRecords.map((source) => source.id));
  const notesByScene = new Map(lessonScenes.map((scene) => [scene.id, []]));

  for (const note of notes) {
    if (!notesByScene.has(note.sceneId)) notesByScene.set(note.sceneId, []);
    notesByScene.get(note.sceneId).push(note);
    if (!note.claimIds?.length) problems.push(`${note.location} must declare at least one :claims: ID.`);
    if (!note.sourceIds?.length) problems.push(`${note.location} must declare at least one :sources: ID.`);
    if (new Set(note.claimIds || []).size !== (note.claimIds || []).length) problems.push(`${note.location} repeats a claim ID.`);
    if (new Set(note.sourceIds || []).size !== (note.sourceIds || []).length) problems.push(`${note.location} repeats a source ID.`);

    const noteClaims = [];
    for (const claimId of note.claimIds || []) {
      const claim = claimById.get(claimId);
      if (!claim) {
        problems.push(`${note.location} references unknown claim ${claimId}.`);
        continue;
      }
      noteClaims.push(claim);
      if (!claim.sceneIds?.includes(note.sceneId)) {
        problems.push(`${note.location} references ${claimId}, but that claim is not mapped to scene ${note.sceneId}.`);
      }
    }
    for (const sourceId of note.sourceIds || []) {
      if (!sourceIds.has(sourceId)) problems.push(`${note.location} references unknown source ${sourceId}.`);
    }

    const requiredSourceIds = new Set(noteClaims.flatMap((claim) => claim.sourceIds || []));
    for (const sourceId of requiredSourceIds) {
      if (!note.sourceIds?.includes(sourceId)) problems.push(`${note.location} omits ${sourceId}, which supports a claim named by the note.`);
    }
    for (const sourceId of note.sourceIds || []) {
      if (sourceIds.has(sourceId) && !requiredSourceIds.has(sourceId)) {
        problems.push(`${note.location} lists ${sourceId}, but none of its named claims uses that source.`);
      }
    }
  }

  for (const claim of claimRecords) {
    for (const sceneId of claim.sceneIds || []) {
      if (!sceneIds.has(sceneId)) problems.push(`${claim.id} references unknown scene ${sceneId}.`);
    }
    for (const sourceId of claim.sourceIds || []) {
      if (!sourceIds.has(sourceId)) problems.push(`${claim.id} references unknown source ${sourceId}.`);
    }
  }

  for (const scene of lessonScenes) {
    const mappedClaims = claimRecords.filter((claim) => claim.sceneIds?.includes(scene.id));
    const sceneNotes = notesByScene.get(scene.id) || [];
    const visiblyCitedClaims = new Set(sceneNotes.flatMap((note) => note.claimIds || []));
    if (scene.claimCoverage === "claims-mapped") {
      if (!mappedClaims.length) problems.push(`scene ${scene.id} declares claims-mapped but no claim maps to it.`);
      if (!sceneNotes.length) problems.push(`scene ${scene.id} declares claims-mapped but has no learner-visible {source-note}.`);
      for (const claim of mappedClaims) {
        if (!visiblyCitedClaims.has(claim.id)) problems.push(`scene ${scene.id} does not expose mapped claim ${claim.id} in a {source-note}.`);
      }
    }
    if (scene.claimCoverage === "no-material-claims") {
      if (mappedClaims.length) problems.push(`scene ${scene.id} declares no-material-claims but ${mappedClaims.map((claim) => claim.id).join(", ")} map to it.`);
      if (sceneNotes.length) problems.push(`scene ${scene.id} declares no-material-claims but contains a {source-note}.`);
    }
  }

  if (lesson?.status === "published") {
    for (const claim of claimRecords) {
      if (claim.reviewStatus !== "reviewed") problems.push(`published lesson claim ${claim.id} must have reviewStatus reviewed, not ${claim.reviewStatus}.`);
    }
    if (lesson.sourceConfidence === "pending-review") problems.push("published lesson sourceConfidence must not be pending-review.");
  }

  return problems;
}
