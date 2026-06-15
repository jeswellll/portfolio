# Jeswell Mathew - Personal Portfolio

A sleek, responsive, and high-performance developer portfolio website designed for **Jeswell Mathew**, Technical Product Manager & Business Strategist. It showcases professional experience, education, projects, achievements, and leadership milestones with clean design aesthetics.

Live site: **[https://jeswellll.github.io/portfolio/](https://jeswellll.github.io/portfolio/)**

---

## 🚀 Key Features

- **Experience & Education Timeline**: A custom topological grid layout that logically aligns experience and education milestones, compressing long empty durations on desktop while falling back to a clean mobile vertical list.
- **Project Filtering System**: Interactive filters categorizing technical projects into **AI & Analytics**, **Product & Strategy**, and **Automation** to match industry-focused requirements.
- **Off-Duty Bento Grid**: A premium 5-item bento grid layout displaying personal highlights with interactive glassmorphism hover overlays, image zooms, and sliding high-contrast typography.
- **Responsive Layout**: Designed for optimal readability across standard viewport sizes, from mobile phones to high-definition desktop monitors.
- **CI/CD Automation**: Integrated with a GitHub Actions pipeline that triggers on pushes to `main` to build and deploy static pages directly to GitHub Pages.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom `ScrollReveal` components
- **Deployment**: [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `v20.x` or higher).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jeswellll/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### Build and Static Export

To manually compile and export the static application locally:
```bash
npm run build
```
The compiled HTML, CSS, and JS files will be generated in the `./out` directory.

---

## 📦 Deployment Pipeline

This repository is configured to deploy automatically via **GitHub Actions**:
- The deployment configuration is defined at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- When a commit is pushed to the `main` branch, the workflow triggers, checks out the repository, builds the static site, and deploys it directly to GitHub Pages.
