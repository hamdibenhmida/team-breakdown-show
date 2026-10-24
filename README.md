# THE TEAM BREAKDOWN — The Ultimate Soft Skills Show

**A 15-minute multiplayer English classroom game** about one connected workplace crisis. GitHub Pages + Firebase Realtime Database + Anonymous Authentication.

This package is a working client-side website with original character images, a short MP4 opening film, English MP3 voice notes, individual scoring, explanations, majority-vote story outcome, podium and animated final results.

## What works immediately?

1. Open `index.html` (or serve locally with `python -m http.server 8000`).
2. Press **Host the Show → Try Interactive Demo**.
3. Six simulated players are provided. Press **Start the Show**, then **Reveal the Results** after each decision.
4. Test all seven connected rounds, the voting charts, live dashboard, alternate group endings, and CSV export.

**Demo mode deliberately does not connect phones.** It demonstrates the host interface while you set up Firebase. A local `file://` URL cannot be shared with phones.

## Activate real multiplayer with Firebase (required)

**GitHub Pages only serves static HTML, CSS, JS, images, audio and video.** It cannot store or synchronize multiplayer answers by itself. Firebase enables separate phones to connect to the same classroom room. See official references:

- https://firebase.google.com/docs/database/web/start
- https://firebase.google.com/docs/auth/web/anonymous-auth
- https://firebase.google.com/docs/database/security
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### Step 1 — Firebase project

1. Visit [Firebase Console](https://console.firebase.google.com/) and create a project.
2. In **Project settings → Your apps**, add a **Web app** (`</>` icon).
3. Copy the Firebase config keys including `databaseURL` into **`config.js`** (fill the empty strings). `databaseURL` is generated after creating the Realtime Database, and its precise regional URL matters.
4. Open **Build → Authentication → Sign-in method** and enable **Anonymous**.
5. Open **Build → Realtime Database** and **Create database** (choose a supported location).
6. In **Realtime Database → Rules**, replace the rules with the entire contents of **`database.rules.json`**, then **Publish**. Never use public `.write: true` rules.
7. If your Firebase Authentication configuration requires it, add the GitHub Pages domain (e.g. `yourname.github.io`) in **Authentication → Settings → Authorized domains**.

> Firebase web configuration values identify your Firebase project but are **not secrets**. Access control relies on Firebase Authentication and the restrictive Realtime Database rules. Do not upload service-account keys, credentials or personal student data.

### Step 2 — Publish on GitHub Pages

1. Create a **public GitHub repository**, e.g. `team-breakdown-show`.
2. Upload the **contents** of this package to the root of the repository: `index.html`, `style.css`, `app.js`, `game-data.js`, `config.js`, `database.rules.json`, `.nojekyll`, `assets/` and this README.
3. In your repository open **Settings → Pages → Build and deployment → Deploy from a branch**, choose **main / (root)** and save.
4. After GitHub Pages publishes, open the generated URL, typically `https://USERNAME.github.io/team-breakdown-show/`.
5. Press **Host the Show → Create Live Room**. A six-character room code and join link will appear.
6. Project the host screen on a classroom display. Students scan the QR code or open the shareable link on their phones. They join using a nickname.
7. **Start the Show**; each phone receives the question. At the host's command, **Reveal the Results** locks answers and computes scores. Then **Next Act** advances all players simultaneously.
8. At the end, the host sees the podium and class leaderboard. Players receive private **Congratulations** (80–100) or **Failed / Try Again** (0–79), personal score, their seven marked answers, and explanations.

**Important:** The QR image is fetched from a third-party image generator; the plain join URL is always displayed if image retrieval fails. Audio/video and character photos are local files and do not rely on YouTube.

## The 15-minute class plan

| Stage | Suggested duration |
|---|---:|
| Opening video, introductions, QR join | 2:00 |
| Act 1 — The argument | 1:15 |
| Act 2 — The blame game | 1:45 |
| Act 3 — The hidden evidence | 2:00 |
| Act 4 — The unheard voice | 1:45 |
| Act 5 — The impossible compromise | 1:45 |
| Act 6 — The client calls | 1:45 |
| Act 7 — The final decision | 1:15 |
| Podium and conclusion | 1:30 |
| **TOTAL** | **15:00** |

The timer is a guide: the host controls reveal and transition timing to accommodate English discussion. Scoring is **10 + 15×6 = 100 points**; each round rewards one defensible *best answer*. Correct answers are green; incorrect answers turn red and explain the stronger alternative. Each player is scored independently. Majority-vote outcomes influence the collective story ending.

## Voice recordings and media

- Original generated, photorealistic imagery: character montage and corporate office scenes (not photographs of real people).
- Original MP4 opening film assembled for this game: a 54-second montage built from the character images, with on-screen captions and a music bed. It carries **no voiceover** — the presenter narrates it live. The script with per-shot timecodes is in `NARRATION_SCRIPT.md`.
- Opening film music: *"Echoes of Time v2"* by **Kevin MacLeod** (incompetech.com), licensed under **CC BY 4.0** (https://creativecommons.org/licenses/by/4.0/). Keep this credit if you redistribute or modify the film.
- Original English spoken MP3 dialogues created with **synthetic voice technology**, rather than recordings of actual actors. This is honest, repeatable and playable offline.
- Generated applause sound effect; successful individual scores trigger confetti and applause.
- Font design uses optional Google Fonts with system-font fallback.

## Accessibility and practical usage

- All spoken media have matching on-screen information or transcripts in the scenario.
- No personal student data required. Use pseudonyms.
- Projector recommended, phone required for live multiplayer.
- The host account must remain signed in (anonymous Firebase account persisted in the same browser) or the room cannot be controlled after reopening it.
- No new player can join after the show starts.
- One response per participant per act, enforced by database rules.
- The data for all questions is client-side and can be inspected by technically skilled users. This is an educational classroom game, **not a cheat-resistant formal assessment**.
- Configuring Firebase may require free-tier registration; usage and quotas are subject to the provider's current terms.

## Test checklist before class

- [ ] Firebase config has the full `databaseURL`.
- [ ] Anonymous Authentication enabled.
- [ ] RTDB rules published (no public write).
- [ ] Website accessible via **https** GitHub Pages.
- [ ] Host creates a new room.
- [ ] Two separate phones can join.
- [ ] Correct and incorrect answers appear only after reveal.
- [ ] Both scores and podium synchronize after reveal.
- [ ] MP4 and MP3 play with sound when tapped.
- [ ] Backup: demo mode works if classroom Wi-Fi fails.

## License / media

Original educational code and images included in this package are supplied for adaptation for this presentation. Do not imply the fictitious company or depicted people are real. This package bundles no commercial third-party fonts. Firebase SDK remains subject to Google's license and terms.
