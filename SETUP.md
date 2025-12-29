# 🚀 Quick Setup Guide

Your personal website is ready! Here's how to get it live on GitHub Pages in 5 minutes.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `[your-username].github.io`
   - Replace `[your-username]` with your actual GitHub username
   - Example: If your username is `milessmith`, name it `milessmith.github.io`
4. Make it **Public**
5. Click **Create repository**

## Step 2: Upload Your Website

### Option A: Using GitHub Web Interface (Easiest)

1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL files from this folder into the upload area:
   - `index.html`
   - `blog.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `add_post.py`
   - `.github/` folder
   - `posts/` folder (with all its contents)
3. Scroll down and click **Commit changes**

### Option B: Using Git Command Line

```bash
cd path/to/this/folder

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial website setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[your-username].github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. Click **Save**

**Your site will be live at:** `https://[your-username].github.io`

(It may take 1-2 minutes to deploy)

## Step 4: Customize Your Site

### Update Your Information

Edit `index.html` and replace the example content:

```html
<h1>hi i'm miles</h1>  <!-- Change to your name -->
```

Update the "Currently" and "Projects" sections with your information.

### Add Your First Blog Post

**Method 1: Use the Python script**
```bash
python add_post.py
```

**Method 2: Manual**
1. Create a new file in `posts/` folder: `my-first-post.md`
2. Add to `posts/posts.json`:
```json
{
  "title": "My First Post",
  "slug": "my-first-post",
  "date": "December 28, 2024",
  "description": "My first blog post"
}
```

### Preview Locally

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Common Tasks

### Adding a New Blog Post

1. Create `posts/your-post-name.md`
2. Add entry to `posts/posts.json`
3. Commit and push to GitHub
4. Post appears automatically!

### Updating Your Info

1. Edit `index.html`
2. Commit and push
3. Site updates in ~1 minute

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #fafafa;           /* Background */
    --text-primary: #1a1a1a;       /* Main text */
    --text-secondary: #666;        /* Secondary text */
    --accent-color: #0066cc;       /* Links & accents */
}
```

## File Overview

```
your-site/
├── index.html          ← Homepage
├── blog.html          ← Blog post template
├── styles.css         ← All styling
├── script.js          ← Loads blog posts
├── add_post.py        ← Helper script to add posts
├── .github/workflows/ ← Auto-deployment config
└── posts/
    ├── posts.json     ← List of all posts
    └── *.md          ← Your blog posts
```

## Pro Tips

✅ **Write in markdown** - Simple, portable, future-proof

✅ **Use the script** - `python add_post.py` creates posts automatically

✅ **Git workflow** - Edit locally, preview, then push to publish

✅ **Image handling** - Create `images/` folder for photos

✅ **Custom domain** - Add CNAME file with your domain

## Need Help?

- Check `README.md` for detailed documentation
- Open an issue on GitHub if something breaks
- The site works 100% client-side, so debugging is easy (F12 → Console)

## Next Steps

1. ✅ Get site live on GitHub Pages
2. ✅ Customize with your information
3. ✅ Write your first post
4. ✅ Share your new site!

---

**Your site URL:** `https://[your-username].github.io`

(Replace `[your-username]` with your actual GitHub username)
