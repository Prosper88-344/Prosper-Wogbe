# Prosper Wogbe — IT Support Specialist & Founder of Tassu Technologies

A high-performance, responsive portfolio web application for **Prosper Wogbe**, IT Support Specialist and Aspiring System Administrator based in Accra, Ghana.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🌟 Highlights & Overview

- **Hero Profile**: High-density hero featuring professional summary, direct CV download, quick-facts definition table, and an active tool strip (*Windows Server, Active Directory, Hyper-V, VLANs, Microsoft 365, Ubuntu*).
- **01 Experience**: Hands-on banking branch IT support milestones at National Investment Bank (NIB), along with academic credentials from Ghana Communication Technology University (GCTU).
- **02 Skills**: Clean categorized competencies covering Systems Administration, Network Engineering, Desktop Support, and Industry Certifications without artificial progress bars.
- **03 Services**: Tailored IT support offerings, domain provisioning, workstation maintenance, and network deployment.
- **Troubleshooting Case Studies**: Structured 4-stage incident documentation (*Problem → Diagnosis → Fix → Result*) for branch-level hardware, network, and system remediation.
- **04 Labs**: Verified virtual topologies and network designs tested in Cisco Packet Tracer and Microsoft Hyper-V.
- **05 Contact & Inquiry Form**: Direct communication channels (MTN, Telecel, Email, LinkedIn, X) with copy-to-clipboard actions and interactive inquiry submission.
- **Unified Theme System**: System-aware light and dark mode tokens with high-contrast accessibility.

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Ensure you have the following installed:
1. **[Node.js](https://nodejs.org/)** (v18.x or v20+ recommended)
2. **[Visual Studio Code](https://code.visualstudio.com/)** or your preferred code editor

Verify your installation:
```bash
node -v
npm -v
```

---

### Step 1: Open the Project
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** and select this project directory.

---

### Step 2: Install Dependencies
Open the integrated terminal in VS Code (`` Ctrl + ` `` or `` Cmd + ` ``) and execute:
```bash
npm install
```

---

### Step 3: Run the Development Server
Start the local Vite dev server:
```bash
npm run dev
```

The application will start on **port 3000**:
```text
  VITE v8.3.1  ready in ~200 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://0.0.0.0:3000/
```

Click the link in the terminal or navigate to `http://localhost:3000` in your web browser.

---

## 🛠 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server on port 3000 with hot reload. |
| `npm run build` | Compiles and builds the production-ready static assets into `dist/`. |
| `npm run preview` | Previews the production build locally before deployment. |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`). |
| `npm run clean` | Cleans up the `dist/` build directory. |

---

## 📂 Project Structure

```text
├── index.html                 # HTML entry point with SEO metadata & JSON-LD structured schema
├── package.json               # Project dependencies and npm scripts
├── vite.config.ts             # Vite configuration with Tailwind CSS v4 & React plugin
├── tsconfig.json              # TypeScript configuration
├── public/                    # Static assets
│   ├── assets/
│   │   ├── profile.webp       # Headshot photograph
│   │   └── Prosper-Wogbe-CV.pdf # Direct download curriculum vitae PDF
│   └── favicon.svg            # Custom vector favicon
└── src/
    ├── main.tsx               # Application DOM entry point
    ├── App.tsx                # Main layout assembly and lazy-loaded section controllers
    ├── index.css              # Global styles, typography tokens, and light/dark theme variables
    ├── components/
    │   ├── AccraClock.tsx     # Live GMT clock display for Accra, Ghana
    │   ├── AnimatedSection.tsx# Lightweight view-triggered entrance animations
    │   ├── CaseStudies.tsx    # Incident troubleshooting deep-dives (Problem, Fix, Result)
    │   ├── Contact.tsx        # Direct contact cards and message inquiry form
    │   ├── Experience.tsx     # Career timeline, National Investment Bank milestones & education
    │   ├── Footer.tsx         # Site footer with branding and copyright
    │   ├── Hero.tsx           # Hero section, fact matrix, bio & CV download
    │   ├── Labs.tsx           # Cisco Packet Tracer topologies & Hyper-V environments
    │   ├── Logo.tsx           # Custom PW monogram and wordmark component
    │   ├── Navbar.tsx         # Sticky navigation with theme toggle & slide-out drawer
    │   ├── SectionDivider.tsx # 1px hairline rule separator between light sections
    │   ├── SectionHeader.tsx  # Standardized section headings with eyebrow numbering
    │   ├── Services.tsx       # IT services & infrastructure deployment capabilities
    │   ├── Skeletons.tsx      # Loading placeholders for lazy-loaded sections
    │   ├── Skills.tsx         # Categorized technical competencies and certifications
    │   └── ThemeSwitch.tsx    # Accessible light/dark theme toggle
    ├── data/
    │   └── portfolioData.ts   # Central data store for profile, milestones, and contacts
    └── lib/
        └── firebase.ts        # Optional Firebase initialization
```

---

## 🎨 Design & Accessibility Guidelines

- **Typography**: Display headlines set in *Barlow Condensed* (700 bold, uppercase), body text set in *IBM Plex Sans* (16.5px–17px base size with relaxed line-height for mobile reading comfort), and data/identifiers in *IBM Plex Mono*.
- **Color Palette**: High-contrast, clean semantic variables (`--bg`, `--surface`, `--ink`, `--rule`, `--accent`, `--band`).
- **Responsive Navigation**: 5-section horizontal navbar on desktop (`01 Experience`, `02 Skills`, `03 Services`, `04 Labs`, `05 Contact`) with a slide-out drawer on mobile viewports.
- **Accessibility**: Full keyboard focus visibility (`:focus-visible`), WCAG AA contrast compliance, ARIA landmark roles, and semantic HTML structure throughout.

---

## 📬 Contact & Profiles

- **Candidate**: Prosper Wogbe
- **Title**: IT Support Specialist · Founder of Tassu Technologies
- **Location**: Accra, Ghana
- **Email**: [prosperw686@gmail.com](mailto:prosperw686@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/prosper-wogbe-3486a941b/](https://www.linkedin.com/in/prosper-wogbe-3486a941b/)
- **X (Twitter)**: [@him_atsu](https://x.com/him_atsu)
- **Phone**: +233 24 493 7706 (MTN) / +233 20 496 5902 (Telecel)
