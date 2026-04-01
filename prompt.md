# Phase 2: Global Components and Core Pages

Now that the setup and Tailwind config are ready, let's build the global UI components and the main pages based on the PRD.

## 1. Global Layout & Components
- **Global Layout (`<Layout />`):** Ensure the background incorporates the "supergraphics" asset. Import Google Fonts for `Prompt` and `Plus Jakarta Sans` in the `<head>`.
- **Header (`<Header />`):** - Background color must be `#3D4766`.
  - Include a placeholder for a horizontal white logo (proportional size).
  - Navigation links: Home, Activities, Publication, Team, Capability. (Do NOT include "Learnings").
- **Footer (`<Footer />`):**
  - Text color must be white. Include the horizontal white logo.

## 2. Core Pages Implementation
Please write the Astro code for the following pages using mock data:
- **Publications Page (`src/pages/publication.astro`):** Create a grid layout. The cards MUST be white (`bg-white`). Include a placeholder for a blue-colored icon (`text-siena-cyan` or similar blue).
- **Team Page (`src/pages/team.astro`):** Create a grid layout using a `<TeamMemberCard />`. The layout should match a professional presentation slide format.
- **Capability / Upskilling Page (`src/pages/capability.astro` & `src/pages/capability/[slug].astro`):**
  - **Landing page:** Title "Smart Data Analysis and Statistics" with a grid of courses.
  - **Course detail page:** Must include a specific Layout with a **side-bar** for course registration details.

Provide the code for `Layout.astro` (including font imports), `Header.astro`, `Footer.astro`, and the `capability/[slug].astro` layout.