# How to Add Images to Your Website

## Quick Steps:

1. **Get your images** (UC Davis logo, ASUCD logo, etc.)
2. **Save them to the `images/` folder** with these names:
   - `ucdavis-logo.png`
   - `asucd-logo.png`
3. **Upload to GitHub** along with the rest of your files
4. **Done!** The images will appear automatically

## Getting the UC Davis Logo:

### Option 1: Official Brand Site
1. Go to https://ucdavis.edu/brand/logos
2. Download the UC Davis logo
3. Save as `ucdavis-logo.png` in the `images/` folder

### Option 2: Quick Web Search
1. Search "UC Davis logo png" on Google
2. Look for official UC Davis sources
3. Download and save as `ucdavis-logo.png`

### Option 3: Create a Placeholder
If you can't find the logo right away, you can:
- Keep the emoji for now (🎓)
- Or use a simple colored square as a placeholder
- Replace it later when you get the actual logo

## Image Specifications:

**For logos in the "Currently" section:**
- Size: At least 200x200 pixels (displayed at 48x48)
- Format: PNG with transparent background (best)
- File size: Keep under 500KB

## Adding More Images:

### For other sections (projects, blog posts, etc.):

**In HTML:**
```html
<img src="images/project-screenshot.png" alt="Description">
```

**In Markdown blog posts:**
```markdown
![Description](../images/blog-photo.jpg)
```

## Folder Structure After Adding Images:

```
your-website/
├── images/
│   ├── ucdavis-logo.png          ← Add this
│   ├── asucd-logo.png             ← Add this
│   ├── project-screenshot.png     ← Optional
│   └── other-images.jpg           ← Optional
├── index.html
├── blog.html
└── ...
```

## Don't Have the Images Yet?

No problem! You have two options:

**Option A: Keep the emojis temporarily**
The site will work fine with emojis (🎓 🔬) until you add real logos.

**Option B: Revert to emojis**
If you want to go back to emojis, edit `index.html` and change:
```html
<img src="images/ucdavis-logo.png" alt="UC Davis" class="logo">
```
Back to:
```html
<span class="logo-placeholder">🎓</span>
```

## Troubleshooting:

**Images not showing?**
- Check that filenames match exactly (case-sensitive!)
- Ensure images are in the `images/` folder
- Make sure you uploaded the `images/` folder to GitHub
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Images too big/small?**
The CSS automatically sizes them to 48x48 pixels. If you want to change this, edit the `.logo` class in `styles.css`.
