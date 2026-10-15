Improve how ready https://draksa.vercel.app is for agents.

Current `Is Agentic` score: 63/100 (`Is Agentic` readiness model based on Ora audit
evidence).

Implement the following fixes in priority order (failures first, then warnings):

1. Agent-friendly 404s (Essential, Partial) Evidence: The nonexistent path
   https://draksa.vercel.app/__ora-404-probe-j7b0ic6q correctly returns HTTP 404. Partial
   credit: no Markdown error body was detected. Recommended fix: Keep the correct HTTP 404
   status. The remaining requirement is a Markdown error body when agents request Accept:
   text/markdown. Include at least 20 characters explaining the error and a link to your
   docs, sitemap, or llms.txt. Verify with
   `curl -sS -L -i -H 'Accept: text/markdown' https://yourdomain.com/some-path-that-does-not-exist`.
   Check both the final 404 status and the Markdown body with Content-Type: text/markdown.
   Checking the status alone does not verify the missing requirement. Current result:
   Partial (50%).

2. Markdown content negotiation (acceptmarkdown.com) (Essential, Failed) Evidence:
   Homepage https://draksa.vercel.app does not meet the Markdown negotiation requirements:
   Accept: text/markdown returned text/html; charset=utf-8; Vary header missing Accept
   (got "rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch")
   Recommended fix: Enable Markdown negotiation on the scanned homepage. Supporting it
   only on `/docs` or a separate .md URL does not satisfy this check. Requests with
   Accept: text/markdown must receive a nonempty Markdown body with Content-Type:
   text/markdown and Vary: Accept. Keep serving HTML for Accept: text/html. Adding Vary
   alone does not create a Markdown response. Verify both with
   `curl -sS -L -i -H 'Accept: text/markdown' https://yourdomain.com/` and
   `curl -sS -L -i -H 'Accept: text/html' https://yourdomain.com/`. Check the final
   response headers and body: Markdown with Vary: Accept for the first request, HTML for
   the second. Current result: Failed.

3. Developer resource discoverability (Recommended, Failed) Evidence: Agent searched for
   "vercel" developer resources but found nothing relevant Recommended fix: Check whether
   your developer resources (API docs, OpenAPI spec, auth docs, developer portal, MCP
   server, SDK documentation) surface in name-based searches. If they do not, use
   predictable URLs, link them in llms.txt, and include your product name in page titles
   and headings. This result reflects one search sample. Current result: Failed.

4. Brand name discoverability (Recommended, Failed) Evidence: draksa.vercel.app was not in
   the top 10 for "Draksa" (searched your brand name alone: no main product term from your
   homepage qualified) Recommended fix: Make sure your own domain ranks in the top results
   when people search your brand together with your main product (for example "Acme
   payments API"). If it does not, your brand may be too generic, conflict with a more
   established term, or not yet indexed. Strengthen it by describing your main product
   clearly in your homepage title and headings, earning press mentions that link to your
   domain, and avoiding redirect chains that mask your main domain in search results.
   Current result: Failed.

5. JSON-LD structured data (Recommended, Failed) Evidence: No JSON-LD structured data
   found on homepage Recommended fix: Add JSON-LD structured data to your homepage using
   the identity type that matches your site - SoftwareApplication for products,
   Organization or LocalBusiness for companies, Person for personal sites, Article for
   blogs - with name, description, url, and type-appropriate fields (offers, sameAs,
   author) so AI can parse your identity programmatically. Current result: Failed.

6. Agent instruction / when-to-use (Recommended, Failed) Evidence: No agent instruction
   file with when-to-use guidance found Recommended fix: Tell agents when to reach for
   you: add a 'when to use this' section to your llms.txt (or a dedicated
   agent-instructions file) that names your best-fit use cases and how an agent should
   call you. Be specific about the jobs you are right for - generic marketing copy does
   not read as guidance. Current result: Failed.

7. Sitemap exists (Recommended, Failed) Evidence: No sitemap found Recommended fix: Add a
   valid XML sitemap at `/sitemap.xml` listing all indexable URLs. Include lastmod dates
   and keep it under 50MB. Current result: Failed.

8. Organization schema completeness (Recommended, Failed) Evidence: No JSON-LD found -
   Organization schema missing Recommended fix: Add Organization JSON-LD that includes
   both contactPoint (with email/phone and contactType) and address (PostalAddress). This
   lets AI verify your business legitimacy and answer contact queries. Current result:
   Failed.

9. Trust anchor pages (Recommended, Failed) Evidence: No trust anchor pages found with
   sufficient content (About, Contact, Privacy) Recommended fix: Publish real `/about`,
   `/contact`, and `/privacy` pages with at least 500 characters of content each. These
   are the pages AI agents check to verify your business is legitimate before recommending
   you. Current result: Failed.

10. Metadata completeness (Recommended, Partial) Evidence: Only 1/4 metadata signals
    present - missing: canonical URL, og:image, og:type Recommended fix: Add all four
    signals to your homepage: <link rel="canonical">, <html lang="...">,
    <meta property="og:image">, and <meta property="og:type">. Agents use these for entity
    resolution and attribution. Current result: Partial (50%).

11. MCP server / manifest (Recommended, Partial) Evidence: Verified MCP server in registry
    with usage (Smithery, vercel, 549 uses, verified) but no live protocol handshake - add
    /.well-known/mcp for full credit. Recommended fix: Build an MCP (Model Context
    Protocol) server exposing your API as tools. Use Streamable HTTP transport for full
    score. This lets Claude, ChatGPT, and other AI agents call your product natively.
    Current result: Partial (67%).

Requirements:

- Inspect the existing codebase before changing files.
- Follow each published protocol or file format exactly.
- Preserve existing product behavior and visual design.
- Add or update tests for every behavior you change.
- Verify every public endpoint and machine-readable file after implementation.
- Finish with a concise change summary, verification results, and any remaining
  recommendations that require product decisions or credentials.
