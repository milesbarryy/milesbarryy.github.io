# Projects Content Folder

Drop your project `.md` files here and they'll automatically appear on your website!

## How It Works

1. **Upload a markdown file** describing your project (e.g., `lastfm-scraper.md`)
2. **Commit the change** on GitHub
3. **GitHub Actions automatically**:
   - Extracts project info
   - Updates `projects/projects.json`
   - Your project appears on the site!

## File Format

Each project file should include:

```markdown
# Project Title

**URL**: https://github.com/yourusername/project-name

Description of your project goes here...

## What It Does

Details about the project...
```

The script will extract:
- **Title**: First `# Heading`
- **URL**: The link after `**URL**:`
- **Description**: First paragraph

## Example

```markdown
# Last.fm Artist Data Scraper

**URL**: https://github.com/milesbarry/lastfm-scraper

A Python web scraper that collects listener data for 50,000 artists from Last.fm using genre-based sampling for diversity.

## Features

- Genre-based sampling
- CSV export
- Rate limiting
```

This becomes:
- Title: "Last.fm Artist Data Scraper"
- URL: https://github.com/milesbarry/lastfm-scraper
- Description: "A Python web scraper that collects..."

## That's It!

Just drop `.md` files here, commit, and your projects appear on the site!
