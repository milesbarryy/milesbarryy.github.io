# Writing Folder

Drop your `.md` files here and they'll automatically appear on your website!

## How It Works

1. **Upload a markdown file** to this folder (e.g., `my-article.md`)
2. **Commit the change** on GitHub
3. **GitHub Actions automatically**:
   - Copies it to the `posts/` folder
   - Updates `posts.json`
   - Your article appears on the site!

## Recommended Format (With Metadata)

Start your markdown file with metadata in YAML format:

```markdown
---
title: The California Aggie: Forum to table: how seed oil paranoia can radicalize
date: November 14, 2024
description: Opinion piece for The California Aggie on seed oil health claims
---

## Why distrust of cooking oils has become a rallying cry for the far right

By MILES BARRY — mabarry@ucdavis.edu

Your article content starts here...
```

### Metadata Fields:

- **title**: The title that appears in your Writing section (required)
- **date**: The publication date - you control this! (optional, defaults to file upload date)
- **description**: Brief summary for SEO and previews (optional, auto-extracted if not provided)

## Simple Format (Without Metadata)

If you don't want to add metadata, just start with a title:

```markdown
# My Article Title

Your content goes here...
```

The system will:
- Use the `# Heading` as the title
- Use the file upload date as the date
- Extract the first paragraph as description

## Benefits of Using Metadata:

✅ **Control the date** - Set exact publication dates
✅ **Better titles** - Include publication info without showing it twice
✅ **Clean articles** - No duplicate headings in the article body
✅ **Manual override** - You can also edit `posts/posts.json` directly if needed

## File Naming

- Use lowercase with hyphens: `my-article-title.md`
- The filename becomes the URL slug
- Example: `seed-oil-paranoia.md` → `yoursite.com/blog.html?post=seed-oil-paranoia`

## Example Files

### With Metadata (Recommended):
```markdown
---
title: The California Aggie: My Opinion Piece
date: January 15, 2025
description: Published opinion piece for the California Aggie
---

## Subtitle Goes Here

Article content...
```

### Without Metadata (Simple):
```markdown
# My Article Title

Article content...
```

## That's It!

No need to run scripts or edit JSON files. Just drop `.md` files here and commit!
