# Aptimark Solutions SEO and Google Sitelinks Audit

Audit date: 2026-06-10  
Website audited: https://www.aptimarksolutions.in/ and https://aptimarksolutions.in/  
Local verification server after fixes: http://127.0.0.1:3001/

## Methodology

I crawled the live site, checked redirects, robots.txt, sitemap.xml, page HTML, metadata, headings, schema, internal links, image alt text, and public search visibility signals. I also inspected and fixed the local Next.js implementation in this repo, then verified the rendered production build locally.

Important limitation: I do not have access to your Google Search Console property, so true Google indexing status, crawl history, manual actions, and Core Web Vitals field data must be confirmed inside GSC. Public search checks are directional, not authoritative.

Primary references:

- Google sitelinks documentation: https://developers.google.com/search/docs/appearance/sitelinks
- Google URL Inspection documentation: https://support.google.com/webmasters/answer/9012289
- Google sitemap documentation: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google robots.txt documentation: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google FAQ structured data documentation: https://developers.google.com/search/docs/appearance/structured-data/faqpage

## 1. Website Structure Audit

### Pages Detected

Live sitemap pages:

| URL | Status | Notes |
| --- | --- | --- |
| https://www.aptimarksolutions.in/ | 200 | Homepage |
| https://www.aptimarksolutions.in/services | 200 | Services page |
| https://www.aptimarksolutions.in/process | 200 | Process page |
| https://www.aptimarksolutions.in/portfolio | 200 | Portfolio page |
| https://www.aptimarksolutions.in/contact | 200 | Contact page |

Host redirects:

| URL | Result |
| --- | --- |
| https://aptimarksolutions.in | 301 to https://www.aptimarksolutions.in/ |
| http://aptimarksolutions.in | 301 to https://www.aptimarksolutions.in/ |
| http://www.aptimarksolutions.in | 308 to https://www.aptimarksolutions.in/ |

### Navigation Structure

Live before fixes:

- Homepage header linked to same-page anchors: `#hero`, `#capabilities`, `#methodology`, `#portfolio`, `#contact-us`.
- Homepage footer linked to canonical route pages: `/`, `/services`, `/process`, `/portfolio`, `/contact`.
- Inner pages had no rendered header links and no rendered footer links.

Post-fix local verification:

- Homepage header now links to canonical page URLs.
- Inner pages now render shared header and footer links to all primary pages.
- Breadcrumb links and BreadcrumbList schema are present on all primary pages.

### Internal Linking

Live before fixes:

| Source | Internal targets |
| --- | --- |
| / | /, /services, /process, /portfolio, /contact, same-page anchors |
| /services | None found in rendered HTML |
| /process | None found in rendered HTML |
| /portfolio | None found in rendered HTML |
| /contact | None found in rendered HTML |

Post-fix local verification:

| Source | Internal targets |
| --- | --- |
| / | /, /services, /process, /portfolio, /contact |
| /services | /, /services, /process, /portfolio, /contact |
| /process | /, /services, /process, /portfolio, /contact |
| /portfolio | /, /services, /process, /portfolio, /contact |
| /contact | /, /services, /process, /portfolio, /contact |

### Crawlability

- All sitemap pages return 200.
- robots.txt returns 200 and allows crawling.
- sitemap.xml returns 200 and lists only canonical HTTPS www URLs.
- No internal broken page links were detected in the live crawl.

### Orphan Pages

- No sitemap page is fully orphaned because the homepage footer links all primary pages.
- Before fixes, inner pages were weakly connected because they did not link out to other important pages.
- After fixes, there are no orphaned primary pages in the local rendered build.

### URL Structure

- Current URL structure is clean and short: `/services`, `/process`, `/portfolio`, `/contact`.
- Legacy `.html` URLs existed as redirects. Before fixes, they redirected to homepage anchors. After fixes, they redirect to the matching canonical pages.

## 2. Google Sitelinks Eligibility Audit

Google generates sitelinks automatically. Google says the best controllable signals are informative titles/headings, logical site structure, concise relevant anchor text, important pages linked from other relevant pages, and avoiding repetitive content.

### Why Sitelinks Are Probably Not Showing Now

The current live site is crawlable, but the sitelinks signals are not yet strong enough:

- The live header promotes homepage anchors rather than canonical route pages.
- Inner pages have no rendered header/footer navigation, which makes the hierarchy look shallow.
- Inner page content is thin: live crawl found about 126 words on services, 98 on process, 126 on portfolio, and 48 on contact.
- Important page titles are generic before fixes: "Services", "Process", "Portfolio", "Contact".
- Schema is limited to Organization and WebSite on every page before fixes.
- The Organization schema points `sameAs` to a generic LinkedIn homepage, not a verified Aptimark profile.
- Public search checks surfaced home/contact/portfolio/process more readily than `/services`; `/services` was not confidently confirmed in public search results.
- Brand/entity strength may still be low if the domain is new, has few branded searches, or has few external brand citations.

### Sitelink Candidate Pages

Strongest candidates after fixes:

| Page | Candidate strength | Reason |
| --- | --- | --- |
| /services | High | Clear commercial intent, FAQ, service catalog schema, header/footer links |
| /process | Medium-high | Clear process page with crawlable workflow summary |
| /portfolio | Medium-high | Case study details now visible in HTML |
| /contact | Medium | Essential brand page, but should add verified email/phone/address if available |

## 3. Page SEO Audit

### Live Before Fixes

| Page | Title | Meta description | Canonical | H1 | H2 hierarchy | OG/Twitter | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- |
| / | 76 chars, descriptive but long | 142 chars, good | https://www.aptimarksolutions.in | 1 H1 | 5 H2s | Present | Organization, WebSite |
| /services | "Services", too generic | 130 chars | /services | 1 H1 | 3 H2s, some service titles lower-level | Present | Organization, WebSite |
| /process | "Process", too generic | 110 chars | /process | 1 H1 | Only active step exposed | Present | Organization, WebSite |
| /portfolio | "Portfolio", too generic | 117 chars | /portfolio | 1 H1 | Project names | Present | Organization, WebSite |
| /contact | "Contact", too generic | 126 chars | /contact | 1 H1 | No H2 | Present | Organization, WebSite |

### Post-Fix Local Verification

| Page | Title | Schema added | Header/footer links | Content improvement |
| --- | --- | --- | --- | --- |
| / | unchanged | WebPage, BreadcrumbList | Header now uses route URLs | Better sitelink anchors |
| /services | SEO-Friendly Web Design & Development Services | WebPage, BreadcrumbList, OfferCatalog, FAQPage | Yes | Visible FAQ, all services as H2 candidates |
| /process | Website Design & Development Process | WebPage, BreadcrumbList | Yes | Crawlable all-step workflow summary |
| /portfolio | Portfolio Case Studies & Selected Work | WebPage, BreadcrumbList | Yes | Visible case-study detail summaries |
| /contact | Contact Aptimark Solutions | WebPage, BreadcrumbList | Yes | Local/service context and links to important pages |

## 4. Technical SEO Audit

| Check | Live status | Fix status |
| --- | --- | --- |
| sitemap.xml | Present, 5 URLs | Kept, `lastmod` stabilized to 2026-06-10 |
| robots.txt | Present, allows all, sitemap declared | Kept |
| Canonicals | Present on all pages | Kept absolute canonical URLs in route metadata |
| Redirects | Host redirects good; `.html` redirected to homepage anchors | `.html` now redirects to matching route pages |
| Broken links | None found among primary internal URLs | No broken primary links after local crawl |
| Duplicate content | Homepage sections and standalone pages overlap | Reduced risk by giving inner pages unique content/schema |
| Mobile friendliness | Viewport present | Preserved |
| Core Web Vitals | Could not verify field data; PageSpeed API quota blocked | Use GSC CWV and PageSpeed Insights after deployment |
| Indexing issues | No noindex found | GSC required for authoritative status |

## 5. Google Indexing Audit

Observed public search signals:

- Public search results surfaced Aptimark pages including homepage, contact, portfolio, and process.
- `/services` was in the sitemap and crawlable, but was not confidently surfaced in public search checks.
- No live page had `noindex`.
- robots.txt does not block crawling.

Required GSC checks:

- Inspect all five URLs in URL Inspection.
- Confirm "URL is on Google" or read the exact non-indexing reason.
- Submit the sitemap at `https://www.aptimarksolutions.in/sitemap.xml`.
- Request indexing after deployment for `/`, `/services`, `/process`, `/portfolio`, and `/contact`.

## 6. Schema Markup Audit

| Schema type | Live before fixes | Post-fix local status |
| --- | --- | --- |
| Organization | Present, but generic LinkedIn `sameAs` issue | Improved and centralized |
| LocalBusiness | Missing | Added as LocalBusiness + ProfessionalService |
| BreadcrumbList | Missing | Added on all primary pages |
| WebSite | Present | Improved and centralized |
| FAQPage | Missing | Added to `/services` with visible matching FAQ content |
| OfferCatalog | Missing | Added to `/services` |
| WebPage | Missing | Added to all primary pages |

Remaining schema enhancement:

- Add verified phone, email, street address, opening hours, and exact social profiles to `src/seo.ts` only if they are real and publicly consistent.

## 7. Internal Linking Analysis

Missing before fixes:

- Header links to `/services`, `/process`, `/portfolio`, `/contact`.
- Header/footer links on inner pages.
- Contextual links from contact to services/process/portfolio.
- Breadcrumb links.

Recommended links now implemented:

- Header and footer link all primary pages.
- Breadcrumb links identify page hierarchy.
- Contact page links to services, process, and portfolio.
- Legacy `.html` URLs consolidate to canonical page URLs.

Further recommendation:

- Add contextual links from service sections to process and contact CTAs, using anchors like "website development process" and "request a web development proposal".

## 8. Header and Footer Audit

Live before fixes:

| Page | Header primary links | Footer primary links |
| --- | --- | --- |
| / | Anchor links only | Yes |
| /services | No | No |
| /process | No | No |
| /portfolio | No | No |
| /contact | No | No |

Post-fix local:

| Page | Header primary links | Footer primary links |
| --- | --- | --- |
| All primary pages | Yes | Yes |

## 9. Google Search Console Readiness

Ready:

- Canonical sitemap URL exists.
- robots.txt points to sitemap.
- Primary pages are indexable.
- Structured data is now present in local build.
- Redirects now consolidate legacy URLs to canonical route pages.

Needs GSC action after deploy:

- Submit sitemap.
- Inspect all five primary URLs.
- Request indexing after deployment.
- Check Page Indexing report for "Crawled - currently not indexed", "Discovered - currently not indexed", duplicate canonical, and blocked issues.
- Check Enhancements/structured data and validate with the Rich Results Test or Schema.org validator.
- Check Core Web Vitals field data.

## 10. Action Plan

### Critical

- Deploy the code fixes in this repo.
- Submit `https://www.aptimarksolutions.in/sitemap.xml` in GSC.
- Use URL Inspection and request indexing for all primary URLs.
- Replace placeholder-level LocalBusiness data with verified phone/email/address/social profiles if available.

### Medium Priority

- Add more unique content to `/services`, `/process`, `/portfolio`, and `/contact`; aim for 500+ useful words on primary commercial pages.
- Add an About page or make the homepage about section a real `/about` page if it is important for brand/entity trust.
- Add client proof, author/team details, certifications, and business contact details for E-E-A-T.

### Low Priority

- Add Article or Blog content for long-tail SEO.
- Add more contextual internal links in body copy.
- Add image width/height optimization and review external image dependencies.

## 11. Code Fixes Applied

Applied files:

- `src/seo.ts`: Centralized site constants, navigation, FAQ content, Organization, WebSite, LocalBusiness, BreadcrumbList, WebPage, FAQPage, and OfferCatalog helpers.
- `src/components/JsonLd.tsx`: Added safe JSON-LD renderer.
- `src/components/SiteChrome.tsx`: Added shared crawlable header, breadcrumb trail, and footer for inner pages.
- `src/app/layout.tsx`: Replaced inline schema with centralized Organization/WebSite/LocalBusiness JSON-LD and stronger metadata constants.
- `src/app/page.tsx`: Added homepage WebPage and BreadcrumbList schema.
- `src/app/services/page.tsx`: Added stronger title/description, absolute canonical, schema, shared chrome.
- `src/app/process/page.tsx`: Added stronger title/description, absolute canonical, schema, shared chrome.
- `src/app/portfolio/page.tsx`: Added stronger title/description, absolute canonical, schema, shared chrome.
- `src/app/contact/page.tsx`: Added stronger title/description, absolute canonical, schema, shared chrome.
- `src/components/seo-pages/ServicesPageContent.tsx`: Added visible FAQ and normalized service headings.
- `src/components/seo-pages/ProcessPageContent.tsx`: Added crawlable workflow summary.
- `src/components/seo-pages/PortfolioPageContent.tsx`: Added visible case-study detail section.
- `src/components/seo-pages/ContactPageContent.tsx`: Added local/service context and contextual internal links.
- `src/app/sitemap.xml/route.ts`: Replaced dynamic current timestamp with stable `lastmod`.
- `next.config.mjs`: Changed `.html` redirects from homepage anchors to canonical route pages.

Verification:

- `npm run build` passed.
- `npm run lint` passed after the build regenerated `.next/types`.
- Local rendered crawl verified schema and navigation on all primary pages.
- Legacy redirect verification passed: `/services.html -> /services`, `/process.html -> /process`, `/portfolio.html -> /portfolio`, `/contact.html -> /contact`.

## 12. Final Scores

Current live scores before deployment:

| Category | Score |
| --- | --- |
| SEO Score | 72/100 |
| Technical SEO Score | 78/100 |
| Google Sitelinks Readiness Score | 42/100 |
| Indexing Score | 68/100 |

Projected scores after deploying the applied fixes and requesting recrawl:

| Category | Score |
| --- | --- |
| SEO Score | 85/100 |
| Technical SEO Score | 88/100 |
| Google Sitelinks Readiness Score | 74/100 |
| Indexing Score | 78/100 |

Scores can improve further with verified GSC indexing, stronger business NAP/social entity data, deeper page copy, and more branded authority signals.

## Final Answers

### Why is Google not showing sitelinks under my brand search result?

Google is probably not showing sitelinks because the live site does not yet send strong enough hierarchy signals. The main live header points to homepage anchors instead of canonical pages, inner pages lack rendered header/footer navigation, several pages are thin, titles are generic, schema is shallow, and at least one important page (`/services`) was not confidently surfaced in public search checks. Google also needs enough brand confidence and crawl history before sitelinks appear.

### What exact changes must be made to make Google display sitelinks?

No one can force Google to display organic sitelinks, but the exact controllable changes are:

1. Deploy the applied code changes.
2. Keep `/`, `/services`, `/process`, `/portfolio`, and `/contact` in the header, footer, sitemap, and breadcrumbs.
3. Keep legacy `.html` redirects pointed to the matching canonical route pages.
4. Keep descriptive page titles and H1/H2 structures.
5. Keep visible FAQ content matched to FAQ schema on `/services`.
6. Add verified LocalBusiness NAP and exact social profiles in `src/seo.ts`.
7. Submit the sitemap in GSC and request indexing for all primary pages.
8. Add more original content and brand trust signals over time.

After deployment, Google must recrawl and reassess the site. Sitelinks can appear only when Google decides the site structure and brand query demand are strong enough.
