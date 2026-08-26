# Mohamed Alagamy — Portfolio

A dark, responsive React portfolio designed around Mohamed Alagamy's current profile as a Computer Science student and emerging Frontend / Full-Stack Web Developer.

## Stack

- React
- Vite
- Tailwind CSS v4
- Bootstrap 5
- Lucide React
- Custom CSS

Vite is used for the development/build workflow. Tailwind v4 is connected through the official Vite plugin.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── assets/
│   └── images/
│       ├── profile.jpg
│       └── projects/
│           └── blood-bank.jpg
├── data.js
├── App.jsx
├── main.jsx
└── styles.css
```

## How to add a project

Open `src/data.js` and add another object to `projects`.

Example:

```js
{
  id: "my-react-project",
  title: "My React Project",
  category: "React Web Application",
  status: "Completed",
  year: "2026",
  description: "Real project description.",
  technologies: ["React.js", "JavaScript"],
  image: "src/assets/images/projects/my-react-project.jpg",
  github: "REAL_GITHUB_URL",
  live: "REAL_LIVE_URL"
}
```

Do not add fake metrics, fake links, or technologies that have not actually been used.

## Personal photo

Replace:

`src/assets/images/profile.jpg`

with your real profile image.

## Project screenshots

Replace:

`src/assets/images/projects/blood-bank.jpg`

with the real screenshot when available.

## CV

The portfolio is prepared to receive a CV download link later. Keep the actual PDF in a public `cv/` folder if you want to add a Download CV button.

## Notes

The current project intentionally keeps the architecture understandable for a learner while separating profile, skills, learning topics, projects, and education into data so the portfolio can grow without rebuilding the UI.
