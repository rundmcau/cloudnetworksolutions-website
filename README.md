# Cloud Network Solutions - Static Website

This is a lightweight static website for `cloudnetworksolutions.com.au`.

## Quick edits
- Update phone number in footer (all pages): search for `1300 000 000`
- Update Formspree form action in `contact.html`:
  - Replace `https://formspree.io/f/yourformid` with your real form endpoint
- Update email addresses if needed

## Free hosting (recommended): Cloudflare Pages
1. Create a GitHub repo and push this folder contents.
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Framework preset: None. Build command: (leave blank). Output folder: `/`.
4. Add custom domain: `cloudnetworksolutions.com.au` and follow DNS prompts.

## Alternative: Netlify
1. Drag-and-drop the folder in Netlify (or connect Git).
2. Add custom domain and follow DNS prompts.

## Files
- `index.html` Home
- `services.html` Services
- `industries.html` Industries
- `about.html` About
- `contact.html` Contact / Quote form
- `privacy.html`, `terms.html` Legal pages
- `assets/img/logo.svg` Logo (vector)
- `assets/img/favicon.svg` Favicon (vector)
- `assets/img/og-cover.svg` Social share image (vector)


## Premium security hardening
- This project includes `_headers` with recommended security headers for Netlify/Cloudflare Pages.
- Includes `.well-known/security.txt`.
- CSP is set via headers; a basic CSP meta tag is included as a fallback.

## Contact form email
- The contact form uses Netlify Forms. In Netlify: Site settings → Forms → Notifications → Add email notification to `sales@cloudnetworksolutions.com.au`.
