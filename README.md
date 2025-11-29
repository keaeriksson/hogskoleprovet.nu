# HPSkolan - Högskoleprovet.nu

A Hugo static website for högskoleprovet.nu, now deployed with GitHub Pages.

## Overview

This is a Hugo-based static website that provides training materials and resources for the Swedish Högskoleprovet (University Admissions Test).

## GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Configure Custom Domain (Optional):**
   
   To use your custom domain (www.högskoleprovet.nu):
   
   a. In your repository settings:
      - Go to Settings → Pages → Custom domain
      - Enter: `www.xn--hgskoleprovet-imb.nu` (the punycode version of högskoleprovet.nu)
      - Click Save
   
   b. Update DNS settings with your domain registrar:
      - Add a CNAME record pointing `www` to `<your-github-username>.github.io`
      - Or add A records pointing to GitHub Pages IPs:
        - `185.199.108.153`
        - `185.199.109.153`
        - `185.199.110.153`
        - `185.199.111.153`
   
   c. Update `config.toml`:
      - Uncomment the custom domain baseURL line
      - Comment out the default GitHub Pages URL

3. **Automatic Deployment:**
   - Every push to the `master` branch triggers automatic deployment
   - The workflow can also be manually triggered from the Actions tab
   - Build status: Check the "Actions" tab in your GitHub repository

### Manual Deployment

If you want to test the build locally before pushing:

```bash
# Install Hugo (if not already installed)
# On macOS:
brew install hugo

# Build the site
hugo

# Test locally
hugo server
```

Visit `http://localhost:1313` to preview the site.

## Project Structure

```
├── archetypes/          # Content templates
├── content/            # Site content (markdown files)
│   ├── blogg/         # Blog posts
│   └── pages/         # Static pages
├── static/            # Static files (images, etc.)
├── themes/            # Hugo theme
│   └── hpskolan/      # Custom theme
├── .github/           # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml # Automated deployment workflow
└── config.toml        # Hugo configuration
```

## Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/hpskolan-public.git
   cd hpskolan-public
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Start the Hugo development server:
   ```bash
   hugo server -D
   ```

4. Make your changes and test locally

5. Commit and push to deploy:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master
   ```

### Creating New Content

Create a new blog post:
```bash
hugo new blogg/your-post-name.md
```

Create a new page:
```bash
hugo new pages/your-page-name.md
```

## Configuration

The main configuration file is `config.toml`. Key settings:

- `baseURL`: The URL where your site will be hosted
- `title`: Site title
- `theme`: Hugo theme name (hpskolan)
- `languageCode`: Language setting (se-SE)

## Theme

This site uses a custom theme located in `themes/hpskolan/`. The theme includes:

- Custom layouts for blog posts and pages
- Responsive design
- Bootstrap CSS framework
- Custom JavaScript functionality

## Dependencies

- **Hugo**: Static site generator (v0.128.0 or higher recommended)
- **Node.js** (optional): For npm packages like Mailchimp integration

## Migration from AWS

This site was previously hosted on AWS S3/CloudFront. The following files are now deprecated:

- `deploy.sh` - Old AWS deployment script
- `template.yml` - CloudFormation template
- `template-lambda.yml` - Lambda function template

These files have been kept for reference but are no longer used.

## Support

For questions or issues, please open an issue in the GitHub repository.

## License

[Add your license information here]
