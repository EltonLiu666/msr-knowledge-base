# MSR Knowledge Base

![CI Tests](https://github.com/EltonLiu666/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)

A web-based knowledge base designed to help PhD students and researchers explore Mining Software Repositories (MSR) research resources.

**Live Website:** https://eltonliu666.github.io/msr-knowledge-base/

## Project Overview

The project provides a reference guide with four categories:

- **Data Sources:** Common software engineering data sources, including GitHub, Stack Overflow, and JIRA.
- **Collection Methods:** Methods for collecting software repository data.
- **Analysis Methods:** Techniques for analyzing collected data.
- **Publication Venues:** Conferences and journals relevant to MSR research.

## Implemented Features

Milestone 1 focuses on the basic website structure, navigation, and Data Sources content.

Implemented features include:

- Four navigation tabs with JavaScript-based switching.
- A Data Sources table containing seven sources.
- Source descriptions and the types of data provided.
- Basic responsive CSS styling.

The remaining categories currently contain placeholder content.

## Project Structure

- `docs/requirements.md` — Requirements and user stories.
- `src/index.html` — Main website structure and content.
- `styles/main.css` — Website styling.
- `scripts/script.js` — Navigation functionality.
- `tests/navigation.test.js` — Automated tests.
- `.github/workflows/ci.yml` — CI testing and deployment workflow.

## Testing

The project uses Node.js built-in testing tools.

Four automated tests verify:

1. All four navigation categories exist.
2. All seven required data sources are included.
3. Data Sources is displayed by default.
4. Navigation buttons switch between sections correctly.

To run the tests locally:

`node --test tests/navigation.test.js`

GitHub Actions automatically runs the tests on pushes and pull requests. Successful changes merged into `main` trigger website deployment.

## Milestones

| Milestone | Status |
|---|---|
| M1: Page Structure, Navigation & Data Sources | Implemented |
| M2: Collection Methods | Future Work |
| M3: Analysis Methods | Future Work |
| M4: Publication Venues | Future Work |

## Future Work

Future development will complete the Collection Methods, Analysis Methods, and Publication Venues sections according to the documented requirements.

Remaining tasks are tracked through GitHub Issues and Milestones.

## Deployment

The website is deployed using GitHub Pages and GitHub Actions. The deployment workflow prepares the HTML, CSS, and JavaScript files and publishes the site after automated tests pass.