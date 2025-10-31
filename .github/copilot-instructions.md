# Copilot / AI assistant instructions for this repo

This repository is a small static HTML/CSS learning project (WDD131, week01). The guidance below is intentionally short and focused so an AI coding agent can be productive immediately.

- Project layout
  - Primary files: `week01/basic-layout.html` and `week01/styles/layout.css`.
  - Static site only (no build system, frameworks, or server-side code detected).
  - HTML uses semantic sections (header, nav, main, aside-like div, footer) and a simple CSS grid for layout.

- Big-picture architecture and intent
  - Purpose: teaching/learning page layout and CSS grid/flexbox basics. Expect small, self-contained changes (layout tweaks, responsive adjustments, color and spacing changes).
  - Data flows: none — this is purely static content. No JSON/APIs, no JS, and no server runtime.

- Project-specific patterns and quirks to preserve
  - CSS file is linked with a relative path from `basic-layout.html`: `styles/layout.css`. Keep relative paths intact when moving files.
  - The stylesheet uses a 3-column grid on `.maincontainer` (`grid-template-columns: auto auto auto`) and then places `.maincontent` into `grid-column: 1/3` and `.asidecontent` into `grid-column: 3/4`.
  - Notable quirk: `.maincontent` and `.asidecontent` use `grid-row: 2` while `.maincontainer` defines `grid-template-rows: 1fr`. This mismatch is discoverable in `week01/styles/layout.css` and should be handled carefully when changing rows or adding responsive rules (likely the original author intended an implicit row 2; adjust template-rows if you change rows).
  - Navigation is a flex container (`.navcontainer`) with `flex-wrap` and `justify-content: space-around`. Keep the link styling (no text-decoration, white color) consistent when adding nav items.

- Typical edits an AI might be asked to perform
  - Make the layout responsive: convert fixed grid rows/columns into responsive media-query rules, or switch to auto-fit/auto-fill for columns.
  - Fix the grid-row mismatch by adding an explicit `grid-template-rows` definition that accommodates the header and content rows, or remove the `grid-row` declarations and rely on source order.
  - Improve accessibility: add ARIA labels to navigation, ensure link text is meaningful.

- How to preview and debug locally (Windows PowerShell)
  - Quick preview: open the HTML file in the default browser from the repo root:

```powershell
Start-Process .\week01\basic-layout.html
```

  - Recommended: use the VS Code Live Server extension for hot-reload preview, or open the file in a browser and use DevTools to inspect grid/flex behavior.

- Tests, build, and CI
  - No test harness, build scripts, or CI configuration were detected. Changes should be validated manually via browser preview.

- When to ask the human for clarification
  - If a change modifies project structure (moving files between folders), confirm whether relative paths should be updated across pages.
  - If adding JavaScript or build tooling — get confirmation; this repository is explicitly static now.

- Key files to inspect for context
  - `week01/basic-layout.html` — main markup and meta tags (author, description).
  - `week01/styles/layout.css` — primary CSS with grid and nav rules; contains the `grid-row`/`grid-template-rows` mismatch.

- Examples to reference in PRs and commits
  - Small, focused commits: "fix grid template-rows to match content rows" or "make nav responsive (wrap + spacing)".
  - When changing layout, include before/after screenshots in the PR description (this is a static UI project; visual diffs are helpful).

If anything in this file is unclear or you want broader scope (e.g., add a responsive/mobile-first rewrite, introduce a build step, or add automated checks), tell me which direction to take and I'll update the instructions and create matching files (tests or build config) as requested.
