// Simple markdown to HTML converter
function parseMarkdown(markdown) {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraphs
    html = '<p>' + html + '</p>';

    // Clean up
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p><h/g, '<h');
    html = html.replace(/<\/h1><\/p>/g, '</h1>');
    html = html.replace(/<\/h2><\/p>/g, '</h2>');
    html = html.replace(/<\/h3><\/p>/g, '</h3>');
    html = html.replace(/<p><pre>/g, '<pre>');
    html = html.replace(/<\/pre><\/p>/g, '</pre>');
    html = html.replace(/<p><blockquote>/g, '<blockquote>');
    html = html.replace(/<\/blockquote><\/p>/g, '</blockquote>');

    return html;
}

// Parse metadata from markdown front matter
function parseMetadata(markdown) {
    const metadataRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = markdown.match(metadataRegex);
    
    if (!match) return { metadata: {}, content: markdown };
    
    const metadataText = match[1];
    const content = markdown.replace(metadataRegex, '');
    
    const metadata = {};
    metadataText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            metadata[key] = value;
        }
    });
    
    return { metadata, content };
}

// Remove first H1 heading from content to avoid duplication
function removeFirstH1(markdown) {
    // Remove metadata block if present
    const withoutMetadata = markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
    
    // Remove first # heading (but keep everything after it)
    return withoutMetadata.replace(/^#\s+.*?\n/, '');
}

// Load blog posts from the posts directory
async function loadBlogPosts() {
    try {
        const response = await fetch('posts/posts.json');
        const posts = await response.json();
        
        const blogList = document.getElementById('blog-posts');
        if (!blogList) return;

        posts.forEach(post => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `blog.html?post=${post.slug}`;
            a.textContent = post.title;
            a.className = 'project-link';
            li.appendChild(a);
            blogList.appendChild(li);
        });
    } catch (error) {
        console.log('No blog posts found yet');
    }
}

// Load projects from the projects directory
async function loadProjects() {
    try {
        const response = await fetch('projects/projects.json');
        const projects = await response.json();
        
        const projectList = document.getElementById('project-list');
        if (!projectList) return;

        projects.forEach(project => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = project.url;
            a.textContent = project.title;
            a.className = 'project-link';
            a.target = '_blank'; // Open in new tab
            a.rel = 'noopener noreferrer';
            li.appendChild(a);
            projectList.appendChild(li);
        });
    } catch (error) {
        console.log('No projects found yet');
    }
}

// Load individual blog post
async function loadBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');

    if (!postSlug) return;

    try {
        // Load post metadata
        const metaResponse = await fetch('posts/posts.json');
        const posts = await metaResponse.json();
        const postMeta = posts.find(p => p.slug === postSlug);

        if (!postMeta) {
            document.getElementById('blog-title').textContent = 'Post not found';
            return;
        }

        // Load HTML content
        const contentResponse = await fetch(`posts/${postSlug}.html`);
        const htmlContent = await contentResponse.text();

        // Update page
        document.getElementById('blog-title').textContent = postMeta.title;
        document.getElementById('blog-date').textContent = postMeta.date;
        document.getElementById('blog-content').innerHTML = htmlContent;
        document.title = `${postMeta.title} - Miles`;
    } catch (error) {
        console.error('Error loading blog post:', error);
        document.getElementById('blog-content').innerHTML = '<p>Error loading post.</p>';
    }
}

// Initialize
if (window.location.pathname.includes('blog.html')) {
    loadBlogPost();
} else {
    loadBlogPosts();
    loadProjects();
}
