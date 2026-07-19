# GitHub Pages and `embeddedknowledge.io`

Status: GitHub Pages activated and publishing from protected `main`. The custom domain `embeddedknowledge.io` is assigned to the Pages site; its Squarespace DNS record cutover and HTTPS certificate provisioning remain pending.

## Cost and visibility

GitHub Pages can host this static site without a separate hosting bill. GitHub Free supports Pages from public repositories. Private-repository Pages requires GitHub Pro, Team, or Enterprise. The published Pages website is public even when a paid plan permits a private source repository.

The free deployment publishes the generated `site/` artifact from the public `VSBDev/EmbeddedKnowledge` repository with `.github/workflows/pages.yml`.

Pages has service limits rather than an unlimited hosting guarantee: a 1 GB published-site limit, a 100 GB/month soft bandwidth limit, and a 10-minute deployment timeout. This project is currently far below those limits. GitHub Pages is appropriate for the read-only educational corpus; future accounts, private learner records, tutoring sessions, or paid SaaS functions need separate infrastructure.

## Build behavior

The Pages workflow:

1. checks the Pages API before building;
2. exits successfully with an explicit Actions notice when Pages has not yet been enabled, so an empty-repository first push does not create a false deployment failure;
3. checks out trusted `main` only after Pages is enabled;
4. installs the locked dependencies;
5. rebuilds and validates the syllabus, graph, lesson index, schemas, and agent context;
6. reads open lesson PR files and their GitHub review states through the API as untrusted data without executing contributor code;
7. includes only schema-valid, identity-matched, non-dismissed structured reviews in displayed quorum counts;
8. rebuilds the public production ledger and publishes `site/` with the official Pages artifact and deployment actions.

The hourly scheduled refresh keeps open-PR quorum status visible without granting a PR workflow deployment authority or consuming the full GitHub Free Actions allowance with minute-by-minute builds. Pushes to `main` and manual dispatches refresh immediately.

## Pages activation record

GitHub could not create the Pages site until the repository had a default branch. After the approved first push created `main`, Pages was activated with GitHub Actions and the deployment was verified. The equivalent recovery commands are retained here:

1. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source. The equivalent authenticated CLI request is:

   ```bash
   gh api --method POST repos/VSBDev/EmbeddedKnowledge/pages -f build_type=workflow
   ```

2. Start the prepared deployment and watch it complete:

   ```bash
   gh workflow run pages.yml --repo VSBDev/EmbeddedKnowledge
   gh run watch --repo VSBDev/EmbeddedKnowledge
   ```

The workflow's API preflight means a new fork or restored repository remains successful-but-skipped until Pages is activated. It does not attempt to enable Pages with `GITHUB_TOKEN`, because GitHub's official `configure-pages` action requires a different administrative token for that operation.

## Connect `embeddedknowledge.io`

1. Verify `embeddedknowledge.io` in the GitHub account domain settings before changing DNS.
2. In repository Pages settings, set the custom domain to `embeddedknowledge.io`.
3. At the DNS provider, create these apex `A` records for `@`:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

4. Create `www` as a `CNAME` to `VSBDev.github.io`—not to a URL containing `/EmbeddedKnowledge`.
5. After DNS and certificate provisioning complete, enable **Enforce HTTPS**.
6. Verify both `https://embeddedknowledge.io/` and `https://www.embeddedknowledge.io/`; GitHub redirects the alternate hostname to the configured custom domain.

No repository `CNAME` file is required for this custom Actions workflow; the custom domain is repository configuration. Do not create wildcard DNS records.

## Rollback

Any existing local or private-network deployment remains independent. GitHub Pages can be unpublished without deleting repository history, and DNS can be returned to a different host later.
