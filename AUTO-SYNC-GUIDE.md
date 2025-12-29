# Auto-Sync Setup Guide

Your website now has automatic syncing! 🎉

## New Folder Structure

```
milesbarryy.github.io/
├── writing/              ← DROP BLOG POSTS HERE
│   ├── seed-oil-paranoia.md
│   └── my-new-article.md
├── projects-content/     ← DROP PROJECT DESCRIPTIONS HERE
│   ├── free-speech-analysis.md
│   └── lastfm-scraper.md
├── posts/               ← Auto-generated (don't edit)
├── projects/            ← Auto-generated (don't edit)
└── ...
```

## How to Add New Writing

### On GitHub Website:

1. Go to your repository: `github.com/milesbarryy/milesbarryy.github.io`
2. Navigate to the `writing/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag your `.md` file
5. Click **"Commit changes"**
6. **Done!** GitHub Actions automatically updates your site

### Using Git Locally:

```bash
# Add your markdown file to writing/
cp my-article.md writing/

# Commit and push
git add writing/
git commit -m "Add new article"
git push
```

## How to Add New Projects

Same process, but use the `projects-content/` folder instead.

### Project File Format:

```markdown
# Project Title

**URL**: https://github.com/yourusername/project

Description of your project...
```

## What Happens Automatically

When you commit to `writing/` or `projects-content/`:

1. **GitHub Actions triggers** (takes ~30 seconds)
2. **Python script runs** and:
   - Copies `.md` files to `posts/` or `projects/`
   - Extracts titles, URLs, descriptions
   - Updates `posts.json` and `projects.json`
   - Commits the changes
3. **Your site updates** with the new content!

## Benefits

✅ No more running Python scripts locally
✅ No more manually editing JSON files
✅ Just drop markdown files on GitHub
✅ Works from any device with GitHub access
✅ Automatic backups (everything in git)

## Monitoring

To see if the sync worked:

1. Go to your repo on GitHub
2. Click **"Actions"** tab
3. See the latest "Auto-sync" workflow run
4. Green checkmark = success!

## Editing Existing Content

Just edit the `.md` file in `writing/` or `projects-content/` and commit. The changes sync automatically!

## Deleting Content

Delete the `.md` file from `writing/` or `projects-content/` and commit. It will be removed from your site automatically.

## Troubleshooting

**Post not showing up?**
- Check the Actions tab for errors
- Make sure your `.md` file has a `# Title` as the first line
- Wait 1-2 minutes for GitHub Actions to complete

**Need to force a re-sync?**
- Make a small edit to the README in `writing/` or `projects-content/`
- Commit the change
- This triggers the workflow

## Old Files

The old `add_post.py` script still works if you prefer the local workflow, but the new auto-sync is much easier!
