#!/usr/bin/env python3
"""
Simple script to add new blog posts or projects to your website.
Usage: python add_post.py
"""

import json
import os
from datetime import datetime

def slugify(text):
    """Convert text to URL-friendly slug"""
    import re
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text.strip('-')

def add_new_post():
    print("=== Add New Blog Post ===\n")
    
    # Get post details
    title = input("Post title: ").strip()
    if not title:
        print("Error: Title cannot be empty")
        return
    
    description = input("Brief description: ").strip()
    
    # Generate slug
    default_slug = slugify(title)
    slug = input(f"URL slug [{default_slug}]: ").strip() or default_slug
    
    # Get date
    default_date = datetime.now().strftime("%B %d, %Y")
    date = input(f"Date [{default_date}]: ").strip() or default_date
    
    # Create markdown file
    md_filename = f"posts/{slug}.md"
    
    if os.path.exists(md_filename):
        overwrite = input(f"\n{md_filename} already exists. Overwrite? (y/N): ").lower()
        if overwrite != 'y':
            print("Cancelled.")
            return
    
    # Create basic markdown template
    markdown_template = f"""# {title}

Write your post content here.

## Heading 2

You can use markdown formatting:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- `code`

```python
# Code blocks
def example():
    pass
```

## Another Section

Add more content here.
"""
    
    with open(md_filename, 'w') as f:
        f.write(markdown_template)
    
    print(f"\n✓ Created {md_filename}")
    
    # Update posts.json
    posts_json = "posts/posts.json"
    
    try:
        with open(posts_json, 'r') as f:
            posts = json.load(f)
    except FileNotFoundError:
        posts = []
    
    # Check if slug already exists
    posts = [p for p in posts if p['slug'] != slug]
    
    # Add new post at the beginning (newest first)
    new_post = {
        "title": title,
        "slug": slug,
        "date": date,
        "description": description or f"Blog post: {title}"
    }
    posts.insert(0, new_post)
    
    # Save updated posts.json
    with open(posts_json, 'w') as f:
        json.dump(posts, f, indent=2)
    
    print(f"✓ Updated {posts_json}")
    print(f"\nYour new post is ready! Edit {md_filename} to add your content.")
    print(f"When done, commit and push to GitHub to publish.")

def add_new_project():
    print("=== Add New Project ===\n")
    
    # Get project details
    title = input("Project title: ").strip()
    if not title:
        print("Error: Title cannot be empty")
        return
    
    url = input("Project URL (GitHub, live demo, etc.): ").strip()
    if not url:
        print("Error: URL cannot be empty")
        return
    
    description = input("Brief description: ").strip()
    
    # Update projects.json
    projects_json = "projects/projects.json"
    
    try:
        with open(projects_json, 'r') as f:
            projects = json.load(f)
    except FileNotFoundError:
        projects = []
    
    # Check if project with same title already exists
    projects = [p for p in projects if p['title'].lower() != title.lower()]
    
    # Add new project at the beginning (newest first)
    new_project = {
        "title": title,
        "url": url,
        "description": description or f"Project: {title}"
    }
    projects.insert(0, new_project)
    
    # Save updated projects.json
    with open(projects_json, 'w') as f:
        json.dump(projects, f, indent=2)
    
    print(f"\n✓ Updated {projects_json}")
    print(f"\nYour new project has been added!")
    print(f"Commit and push to GitHub to publish.")

def main():
    print("What would you like to add?\n")
    print("1. Blog Post")
    print("2. Project")
    print("3. Exit")
    
    choice = input("\nEnter choice (1-3): ").strip()
    
    if choice == '1':
        add_new_post()
    elif choice == '2':
        add_new_project()
    elif choice == '3':
        print("Goodbye!")
    else:
        print("Invalid choice. Please run again and select 1, 2, or 3.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelled.")
    except Exception as e:
        print(f"\nError: {e}")
