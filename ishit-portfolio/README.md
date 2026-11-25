# Ishit Tyagi – Portfolio

React + Vite portfolio. Deploys to GitHub Pages automatically.

## Run locally
```bash
npm install
npm run dev
```

## Edit your content
All text lives in `src/data.js` (profile, projects, skills, education, training).
Add your GitHub link in `profile.github` and project `repo` / `demo` links to show buttons.
Replace `public/Ishit_Tyagi_Resume.pdf` to update the resume download.

## Deploy on GitHub Pages
1. Create a repository and push this project to the `main` branch.
2. In the repo go to **Settings → Pages**, and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site. Your address appears in the Actions run.

## Contact form delivery (optional)
Without a key, the form opens a pre-filled Gmail message. To get messages straight in your inbox:
1. Get a free access key at https://web3forms.com.
2. In the repo go to **Settings → Secrets and variables → Actions → New repository secret**.
3. Name it `VITE_WEB3FORMS_KEY` and paste the key. Push any change to redeploy.

For local testing copy `.env.example` to `.env` and fill the key.
