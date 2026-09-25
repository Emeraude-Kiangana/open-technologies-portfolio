# P01-CP-FREELANCE-07 — SEO + Discoverability

Status: **CLOSED · TESTED · DEPLOYED**

## Mission

Make the public evidence and freelance surfaces easier for search engines and link-preview systems to understand without inflating claims.

```text
PUBLIC CONTENT
   ↓
PAGE METADATA
   ↓
CANONICAL URLS
   ↓
INDEX / NOINDEX POLICY
   ↓
SITEMAP
   ↓
STRUCTURED DATA
   ↓
SEARCH / SHARE DISCOVERY
```

## Index policy

Indexed:

- homepage;
- services;
- case studies;
- eCDF proof page;
- NovaForge proof page;
- C.A.O proof page.

Noindex, follow:

- client intake;
- portfolio support.

Reason: intake and support are functional/transactional surfaces, not canonical search landing pages.

## Implemented primitives

- absolute canonical URLs;
- route-specific title and description metadata;
- Open Graph metadata;
- Twitter summary metadata on the core commercial surface;
- meta robots policy;
- XML sitemap through Next.js MetadataRoute;
- schema.org JSON-LD for Person + WebSite.

## GitHub Pages boundary

This is a project site under:

`https://emeraude-kiangana.github.io/open-technologies-portfolio/`

The repository cannot claim control of the host-root `https://emeraude-kiangana.github.io/robots.txt` from this project path. CP07 therefore does not falsely claim a domain-root robots.txt deployment.

Index control is enforced with page-level meta robots. Sitemap lives within the project site.

## Claim boundary

CP07 does not claim:

- Google/Bing indexing;
- ranking position;
- organic traffic;
- click-through-rate improvement;
- Search Console ownership;
- backlinks;
- search-engine acceptance of structured data.

Those require external observations.

## Closure gate

CP07 closes only if:

- canonical URLs are present;
- indexable commercial/reference routes have metadata;
- intake/support are noindex;
- sitemap contains only intended indexable routes;
- structured data stays bounded to documented identity/technical topics;
- `npm run validate:seo` passes;
- lint/tests/secret scan/static export pass;
- post-merge GitHub Pages deploy passes.


## Closure evidence

Implementation merge on `main`:

`ff134606116fba5061ddc23e142735c3dbd35122`

Post-merge verification on that exact commit:

- Portfolio CI `36175726957` — **SUCCESS**;
- Freelance Service Proof Packs `36175726934` — **SUCCESS**;
- GitHub Pages deploy `36175726911` — **SUCCESS**.

Portfolio CI verified:

- lint;
- support tests;
- freelance service proof tests;
- offer validation;
- case-study validation;
- client-intake validation;
- conversion-layer validation;
- SEO/discoverability validation;
- tracked-file secret scan;
- static export build.

Implementation note:

The first PR build failed because Next.js static export requires the sitemap metadata route to be explicitly static. The fix added `export const dynamic = "force-static"` to `src/app/sitemap.ts`, after which the PR and post-merge static exports passed.

Closure interpretation:

- canonical metadata is generated for core public pages;
- intended indexable routes are present in the sitemap;
- intake/support remain `noindex, follow`;
- bounded Person + WebSite JSON-LD is present;
- GitHub Pages project-path limitations are explicitly documented.

This checkpoint does not claim indexing, ranking, traffic, backlinks or Search Console verification.
