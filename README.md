# Personal Website

A clean, minimal personal website inspired by [nicholaschen.me](https://nicholaschen.me/). Built as a static site optimized for GitHub Pages with markdown-based blog posts.

## Features

- **Clean, minimal design** - Simple, elegant aesthetic focused on content
- **Markdown blog posts** - Write posts in markdown and they automatically appear on the site
- **Static site** - No build process required, works directly on GitHub Pages
- **Responsive** - Works beautifully on mobile and desktop
- **Easy to customize** - Simple HTML/CSS structure

## Quick Start

### 1. Set Up GitHub Repository

1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
2. Upload all files from this project to the repository
3. Go to Settings → Pages and ensure "Deploy from branch: main" is selected
4. Your site will be live at `https://username.github.io`

### 2. Customize Your Information

Edit `index.html` to update:

- Your name in the header
- Current positions and organizations
- Project links
- Any other personal information

### 3. Add Your Blog Posts

#### To add a new blog post:

1. Create a new `.md` file in the `posts/` directory (e.g., `my-new-post.md`)

2. Write your post in markdown:

```markdown
# My Blog Post Title

This is the introduction to my post.

## Section Heading

Content goes here with **bold text** and *italic text*.

- Bullet points
- Work great

You can also include [links](https://example.com) and code blocks:

\`\`\`python
def hello():
    print("Hello, world!")
\`\`\`
```

3. Add the post metadata to `posts/posts.json`:

```json
{
  "title": "My Blog Post Title",
  "slug": "my-new-post",
  "date": "January 15, 2025",
  "description": "A brief description of the post"
}
```

4. Commit and push to GitHub - your post will appear automatically!

### 4. Add Your Projects

Projects work the same way as blog posts - they're loaded dynamically from a JSON file!

#### To add a new project:

**Option 1: Use the Python script**
```bash
python add_post.py
# Select option 2 (Project)
```

**Option 2: Edit manually**

1. Open `projects/projects.json`
2. Add your project at the top:

```json
{
  "title": "my awesome project",
  "url": "https://github.com/yourusername/project-name",
  "description": "Brief description of what it does"
}
```

3. Save and push to GitHub!

**Project URLs can be:**
- GitHub repositories
- Live demos (Shiny apps, websites, etc.)
- Google Drive links
- Any URL you want to share

Projects automatically open in a new tab when clicked.

## File Structure

```
.
├── index.html          # Main homepage
├── blog.html          # Blog post template
├── styles.css         # All styling
├── script.js          # Markdown parsing and post loading
├── posts/
│   ├── posts.json     # Blog post index
│   ├── *.md          # Individual blog posts in markdown
└── README.md         # This file
```

## Markdown Support

The site supports standard markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold**` or `__bold__`
- **Italic**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Images**: `![alt text](image-url)`
- **Code**: `` `inline code` `` or triple backticks for blocks
- **Blockquotes**: `> quote text`
- **Lists**: `-` or `1.` for bullet/numbered lists

## Customization Tips

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #fafafa;
    --text-primary: #1a1a1a;
    --text-secondary: #666;
    --accent-color: #0066cc;
    --border-color: #e5e5e5;
    --hover-bg: #f5f5f5;
}
```

### Add Images/Logos

1. Create an `images/` folder in your repository
2. Add your images there
3. Reference them in your HTML:

```html
<img src="images/your-image.jpg" alt="Description">
```

### Update Projects Section

Edit the projects section in `index.html`:

```html
<section class="projects">
    <h2>Projects</h2>
    <ul class="link-list">
        <li><a href="https://your-project-url.com" class="project-link">project name</a></li>
    </ul>
</section>
```

## Advanced: Custom Domain

To use a custom domain (e.g., `yourname.com`):

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)
2. Create a file named `CNAME` in your repository with your domain:
   ```
   yourname.com
   ```
3. Configure your domain's DNS settings to point to GitHub:
   - Add an A record pointing to: `185.199.108.153`
   - Add an A record pointing to: `185.199.109.153`
   - Add an A record pointing to: `185.199.110.153`
   - Add an A record pointing to: `185.199.111.153`
4. Wait for DNS propagation (can take up to 48 hours)

## Tips for Writing

### Blog Post Best Practices

- **Clear titles** - Make it obvious what the post is about
- **Good structure** - Use headers to break up long posts
- **Code formatting** - Use code blocks for any code snippets
- **Links** - Reference sources and related content
- **Images** - Add visuals to break up text (store in `images/` folder)

### File Naming

- Use lowercase for file names
- Use hyphens instead of spaces: `my-blog-post.md` not `My Blog Post.md`
- Keep slugs short and descriptive

### Managing Posts

- Keep `posts.json` in reverse chronological order (newest first)
- The array order in `posts.json` determines the display order
- Archive old posts by moving them to a `posts/archive/` folder

## Troubleshooting

**Posts not showing up?**
- Check that the slug in `posts.json` matches the filename (without `.md`)
- Ensure `posts.json` is valid JSON (no trailing commas!)
- Clear your browser cache

**Styling looks broken?**
- Make sure `styles.css` is in the same directory as `index.html`
- Check browser console for errors (F12 → Console)

**Images not loading?**
- Use relative paths: `images/photo.jpg` not `/images/photo.jpg`
- Ensure images are committed to your repository

## Development

To test locally:

```bash
# Simple Python server
python -m http.server 8000

# Or with Node.js
npx http-server
```

Then visit `http://localhost:8000`

## License

Feel free to fork and customize this template for your own use!

## Credits

Design inspired by [Nicholas Chen](https://nicholaschen.me/)
