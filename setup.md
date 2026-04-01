# Phase 1: Project Setup and Configuration

Now, let's initialize the project and set up the architecture integrating the specific brand typography.

## Tech Stack
- **Framework:** Astro (latest version, purely static SSG mode).
- **Styling:** Tailwind CSS.
- **Content Management:** Astro Content Collections.

## Tasks to Execute:
1. **Initialize Astro & Tailwind:** Provide the standard terminal commands to create a new Astro project with Tailwind CSS.
2. **Typography Setup:** Write the configuration for `tailwind.config.mjs` to include the brand colors (`siena-navy`: `#3D4766`, `siena-grey`: `#989898`, `siena-dark`: `#262626`, `siena-cyan`: `#8EEDFE`) and the brand fonts (`Prompt` for sans/headings, `Plus Jakarta Sans` for body).
3. **Folder Structure:** Create the standard Astro structure highlighting `src/layouts/Layout.astro`, `src/components/`, `src/pages/`, and `src/content/`.
4. **Content Collections Schema:** Write the `src/content/config.ts` file to define schemas for:
   - `team` (fields: name, title, role, description, image).
   - `publications` (fields: title, authors, journal, year, link).
   - `courses` (fields: title, description, date, price, registrationLink).

Output the terminal commands, the `tailwind.config.mjs` code, and the `config.ts` code block.