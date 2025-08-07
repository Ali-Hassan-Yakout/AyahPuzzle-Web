# Quran Kids Puzzles

A colorful, interactive website for children to learn the Quran through fun puzzles! No login required. Works great for Zoom screen sharing and is mobile-friendly.

## Features
- **No authentication:** Anyone can play, no sign-in needed.
- **Kid-friendly design:** Bright colors, big buttons, playful fonts, rounded UI, and fun animations.
- **Puzzle types:**
  - Drag-and-drop Ayat order
  - Missing word (fill in the blank)
  - Multiple choice (Surah meanings)
- **Surah selection:** Choose from any Surah (examples: Al-Fatiha, Al-Ikhlas, An-Nas).
- **Scoring:** +10 points for each correct answer, score shown in the corner.
- **No backend:** All data is local, no server needed.
- **Mobile responsive:** Works on phones and tablets.
- **Ready for GitHub Pages:** Static files only.

## Folder Structure
```
/assets         # Images, audio, icons
/data/puzzles.js # All puzzle data (add more Surahs here)
/surahs         # (Optional) Surah-specific assets
/src            # React app source code
```

## Usage

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```
   The app will open at http://localhost:1234

### Build for Deployment
1. Build static files:
   ```bash
   npm run build
   ```
2. The static site will be in the `build/` folder. Deploy this to GitHub Pages or any static host.

### Deploy to GitHub Pages
- Push the contents of `build/` to your `gh-pages` branch, or use a GitHub Action for static deployment.
- Set the repository's GitHub Pages source to `/gh-pages` branch (or `/docs` if you move the build there).

## Adding New Puzzles
- Edit `/data/puzzles.js`.
- Add a new Surah key with an array of puzzle objects.
- Supported puzzle types: `order`, `missing-word`, `multiple-choice`.
- See the file for examples.

## Customization
- Add images or audio to `/assets` and reference them in your components.
- To add more Surahs, simply expand the `surahList` in `src/App.js` and add puzzles in `data/puzzles.js`.

## Credits
- Built with [React](https://react.dev/) and [Parcel](https://parceljs.org/).
- UI inspired by kids' educational games.

---

**Enjoy learning the Quran in a fun way!**