# Projects Folder

This folder contains the configuration for your projects section.

## File Structure

```
projects/
└── projects.json    # List of all your projects
```

## How It Works

Projects are loaded dynamically from `projects.json`. When someone visits your site, JavaScript fetches this file and displays all your projects.

## Adding a New Project

### Method 1: Use the Python Script

```bash
python add_post.py
# Select option 2 (Project)
```

### Method 2: Edit projects.json Manually

Open `projects.json` and add a new entry:

```json
{
  "title": "my awesome project",
  "url": "https://github.com/yourusername/project",
  "description": "What this project does"
}
```

**Important:** Add new projects at the **top** of the array (they appear in order).

## Project Entry Format

Each project needs:
- **title**: Display name (lowercase recommended for consistency)
- **url**: Link to the project (GitHub, live demo, etc.)
- **description**: Brief description (optional, for your reference)

## Example

```json
[
  {
    "title": "uc davis course planner",
    "url": "https://github.com/milesbarry/course-planner",
    "description": "Interactive tool to plan quarterly course schedules"
  },
  {
    "title": "survey analysis dashboard",
    "url": "https://milesbarry.shinyapps.io/survey-dashboard/",
    "description": "R Shiny dashboard for visualizing survey results"
  }
]
```

## Tips

- **URLs**: Can be GitHub repos, live demos, Google Drive links, etc.
- **Title style**: Match the lowercase style of your site (e.g., "my project" not "My Project")
- **Order**: Most recent projects first (top of the array)
- **Links open in new tabs**: Projects automatically open in a new browser tab

## After Adding Projects

1. Save `projects.json`
2. Commit and push to GitHub
3. Projects appear automatically on your site!
