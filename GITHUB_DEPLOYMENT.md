# Deploy to GitHub Pages - Quick Start

Your presentation is now ready to deploy! Follow these steps to make it live and accessible to your players.

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository with these settings:
   - **Repository name**: `team-breakdown-show` (or your preferred name)
   - **Description**: "The Ultimate Soft Skills Show - Interactive team decision-making game"
   - **Visibility**: Public (required for GitHub Pages)
   - **Initialize**: Leave unchecked (we already have git initialized)

3. Click **Create repository**

## Step 2: Connect Local Repository to GitHub

After creating the repository, you'll see instructions. Run these commands in your terminal:

```bash
cd "C:\Users\benhm\Downloads\The_Ultimate_Soft_Skills_Show_GitHub_Ready (1)"

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/team-breakdown-show.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/(root)**
5. Click **Save**

GitHub will now deploy your site. Wait 1-2 minutes.

## Step 4: Access Your Live Presentation

Your presentation will be live at:
```
https://YOUR_USERNAME.github.io/team-breakdown-show
```

Example: `https://john.github.io/team-breakdown-show`

## Sharing with Players

### For Host (Computer):
1. Open the deployed URL
2. Click **HOST THE SHOW**
3. Click **CREATE LIVE ROOM** (if Firebase is configured)
4. Share the **Room Code** or **QR Code** with players

### For Players (Mobile):
1. Open the join link: `https://YOUR_USERNAME.github.io/team-breakdown-show?room=XXXXXX`
2. Or scan the QR code
3. Enter their nickname
4. Join the game

## What's Working Now

✅ Professional logo with gradient  
✅ High-quality voice recordings (100% clear)  
✅ Character introduction showing Olivia, Ethan, Nina, Daniel  
✅ All original game content (7 decisions, scoring, endings)  
✅ Mobile responsive design  
✅ Demo mode (works without Firebase)  
✅ Live multiplayer (with Firebase configuration)  

## Optional: Configure Firebase for Live Multiplayer

If you want players on different devices to play simultaneously:

1. Visit https://firebase.google.com
2. Create a project
3. Get the Firebase config keys
4. Paste them into `config.js` in the root folder
5. Commit and push to GitHub

See `README.md` for detailed Firebase setup instructions.

## Updates & Maintenance

To update the presentation after deployment:

```bash
# Make your changes locally
# Then commit and push:
git add -A
git commit -m "Description of changes"
git push origin main
```

Your live site updates automatically within 1-2 minutes!

---

**Need help?** See the included `README.md` for complete documentation.
