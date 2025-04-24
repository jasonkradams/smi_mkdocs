# Spokane Mountaineers Inc (SMI) Website

Welcome to the source repository for the **Spokane Mountaineers Inc** (SMI) website, built using **MkDocs** with the `material` theme. This static site is optimized for performance, mobile-friendliness, and community engagement. It plans to integrate Google Workspace and Salesforce for member management, event workflows, and newsletter delivery.

---

## 🚀 Features (planned)

- Vibrant, outdoor-themed layout with scenic Pacific Northwest imagery
- Mobile-first responsive design
- Clean, accessible typography with cool tones (greens, greys, blues)
- Embedded Google Calendar for event visibility
- “Join Us” call to action buttons throughout
- Member testimonials and club highlights
- Google Workspace as the Identity Provider (IdP) for login integration
- Newsletter & reminders powered by Gmail + Google Apps Script

---

## 📁 Project Structure

```shell
.
├── mkdocs.yml               # Main MkDocs configuration file
├── docs/
│   ├── index.md             # Home page
│   ├── about.md             # About SMI
│   ├── events.md            # Embedded Google Calendar
│   ├── join.md              # How to join/renew
│   ├── volunteer.md         # Volunteer opportunities
│   └── contact.md           # Contact form or info
├── overrides/
│   └── main.html            # Custom layout overrides
├── theme/
│   └── custom.css           # Styling overrides for Material theme
└── scripts/
    └── event_sync.py        # (Optional) Sync calendar events or markdown from Google Sheets or Salesforce
```

---

## 🛠️ Requirements

- Python 3.9+
- `mkdocs` and `mkdocs-material`
- (Optional) `google-api-python-client` if using Google integration
- (Optional) GitHub Actions or Netlify for deployment

---

## ⚙️ Development

1. Clone the repo
2. Install dependencies:

   ```shell
   pip install mkdocs mkdocs-material
   ```

3. Run locally:

   ```shell
   mkdocs serve
   ```

4. Build the site:

   ```shell
   mkdocs build
   ```

---

## ☁️ Deployment Options

### GitHub Pages

1. Push to `main` branch
2. Enable GitHub Pages in repo settings (use `/site` folder)

### Netlify

- Connect your repo and set build command: `mkdocs build`
- Set publish directory: `site/`

### Cloudflare Pages / Vercel

- Supported with minor configuration

---

## 🔐 Authentication (Optional)

If enabling login for members:
- Use Google Workspace as your Identity Provider (SAML or OIDC)
- Integrate via client-side JavaScript
- Use Auth0 or Firebase Auth if extended login logic is needed

---

## 📣 Contributing

1. Fork and clone the repo
2. Create a new branch: `git checkout -b my-changes`
3. Make changes and commit: `git commit -am "Describe changes"`
4. Push to GitHub and open a Pull Request

---

## 🧠 Future Ideas

- Auto-publish member-submitted events from Google Forms
- Embed Giscus for lightweight discussions
- Sync Salesforce data to update events and content
- Add photo gallery or gear library section

---

## 📫 Contact

Built and maintained by the Spokane Mountaineers website team.
For support or questions, reach out via our [Contact Page](./contact.md).

---
