# Attribution

This entire directory is a **non-production format specimen**. It does not represent a contributed, reviewed, adjudicated, or published EmbeddedKnowledge lesson and must never count toward course coverage.

The specimen prose, assessment, declarative diagram, and the `assets/conjugate-pairs.svg` figure were created for EmbeddedKnowledge and are offered under CC BY 4.0. The source registry demonstrates claim provenance; a source listing does not imply that source text or artwork was copied into the specimen.

## Third-party media

The specimen redistributes exactly one third-party image, so that the provenance path is demonstrated rather than described:

- `assets/buffer-titration.svg` — *Buffer titration* by **Wolfmankurd at English Wikipedia**, **public domain**. The [file page](https://commons.wikimedia.org/wiki/File:Buffer_titration.svg) carries the PD-self template, in which the author releases the work into the public domain for any purpose without conditions; the Commons API returns `Copyrighted: False` for the same file. Verified against the file's own page on 2026-07-25, not against a search result.

  **Modified.** The XML declaration and editor comment were removed so the document begins at the `svg` element, and `title` and `desc` accessibility text was added, which the original lacked. The plotted curve, axes, and labels are unchanged. A public-domain work carries no attribution condition, and the credit is rendered to the learner anyway: the corpus states where a picture came from whether or not a licence compels it.

This entry is the worked example for `thirdPartyAssets` in `lesson.json`. An image that is shown to a learner and declared in neither `thirdPartyAssets` nor `originalAssets` fails validation, and a declared third-party asset that this file does not name fails as well.

The OpenStax source entry is a reference, not an adaptation license determination. Editors must verify rights for the exact title, edition, format, and use before adapting material.

Both registry entries record a real, checkable licence rather than a hedge, because that is the behaviour the rights ledger is meant to model:

- OpenStax *Chemistry 2e* — **CC BY-NC-SA 4.0**, retrieved 2026-07-19. Its NonCommercial and ShareAlike terms are **incompatible** with this CC BY 4.0 corpus, so the specimen cites and links it and copies nothing from it.
- IUPAC *Compendium of Chemical Terminology* (Gold Book) — **CC BY-SA 4.0** for individual terms, retrieved 2026-07-19. ShareAlike is likewise incompatible with CC BY 4.0 reuse, so term definitions are cited, never copied.

Each entry also carries an `archivedUrl` snapshot so the licence claim stays checkable after the publisher's page changes.

The v2 source registry separately records how each work is used and whether an agent may process it. Both sources are facts-only references: no source prose, organization, examples, questions, or media are reused. OpenStax's current page expressly restricts generative-AI ingestion, and agent permission for the IUPAC source was not established, so both are marked `human-only` for future contributor and reviewer agents.

The specimen declares two outcomes — `topic-acids-bases-acid-base-models` and `topic-acids-bases-buffers` — because the transfer scene and `claim-buffer-response` teach buffer response, which is a separate atomic outcome. Its graph prerequisite `topic-acids-bases-weak-acid-base` is therefore declared alongside `topic-bonding-molecular-structure-lewis-formal-charge`. Coverage is computed from declared outcomes, so a pack must declare everything it actually teaches and every prerequisite that teaching assumes.
