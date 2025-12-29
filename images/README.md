# Images Folder

Place your images here for use on your website.

## Required Images (for the current setup):

**Currently section:**
- `letters-and-science-logo.png` - UC Davis College of Letters and Science logo
- `irl-logo.png` - ASUCD Innovation & Research Lab logo
- `ca-aggie-logo.jpeg` - The California Aggie logo
- `sts-logo.png` - UC Davis STS Department logo

**Previously section:**
- `startup-logo.png` - UC Davis Student Startup Center logo
- `bronx-defenders-logo.png` - The Bronx Defenders logo

## Image Guidelines:

### Logo Images
- **Format**: PNG with transparent background works best
- **Size**: 200x200 pixels or larger (will be displayed at 48x48)
- **File naming**: Use lowercase with hyphens (e.g., `uc-davis-logo.png`)

### Where to Find Logos:

**UC Davis Logo:**
- Visit: https://ucdavis.edu/brand/logos
- Download the official UC Davis logo
- Use the square or circular version if available

**ASUCD Logo:**
- Check ASUCD's official website or contact them for brand assets
- Or use a simple text-based placeholder initially

### Tips:
- Keep file sizes reasonable (under 500KB each)
- Use PNG format for logos (supports transparency)
- Use JPG for photos
- Name files descriptively

## Adding More Images:

To add additional images to your site:

1. Upload the image to this `images/` folder
2. Reference it in your HTML like this:
   ```html
   <img src="images/your-image-name.png" alt="Description">
   ```

## Example Usage:

```html
<!-- Logo in the Currently section -->
<img src="images/ucdavis-logo.png" alt="UC Davis" class="logo">

<!-- Photo in a blog post -->
<img src="images/my-photo.jpg" alt="Description of photo">
```
