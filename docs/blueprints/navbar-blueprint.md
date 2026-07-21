# Blueprint: Premium Ministry Navbar & Global Navigation System — The King's Temple A/G

## Page & Component Overview
* **Church Name**: The King's Temple Assemblies of God (*The King's Temple A/G*)
* **Location**: Offinso, Kumasi, Ghana
* **Senior Pastor**: Pastor Collins Ababio
* **Established Date**: April 9, 2019 (*"Serving Offinso since 2019"*)
* **Purpose**: Provide an elegant, glassmorphic, accessible digital doorway into our welcoming church family. Deliver 1-click access to Sunday services, campus location, live media broadcasts, and online giving.

## Component Architecture (`src/components/navbar/`)
```
src/components/navbar/
├── Navbar.tsx             # Master sticky glass container & scroll state
├── TopBar.tsx             # Announcement bar with trust badge & location
├── DesktopNav.tsx          # Desktop link track & action buttons
├── MegaMenu.tsx           # Rich megamenus for About, Ministries, and Media
├── MobileMenu.tsx         # Mobile drawer with featured guest cards
├── NavLinks.ts            # Navigation items & route configuration
└── MobileBottomActions.tsx # Fixed mobile bottom bar (Location, Call, Visit)
```

## Section Details & Design Rationale
1. **Top Announcement Bar (`TopBar.tsx`)**:
   * Left: Trust badge (`Serving Offinso since 2019`), Sunday service time (`[Service Time To Be Confirmed]`), Location (`Offinso, Kumasi, Ghana`).
   * Right: Phone shortcut (`+233 55 272 4685`), Search modal trigger (`Cmd+K`).

2. **Main Header & Ministry Branding (`Navbar.tsx`)**:
   * Glass transparent initial state (`bg-white/80 backdrop-blur-xl border-b border-white/20`), smooth scroll transition to white background with soft shadow (`shadow-card`).
   * Ministry Branding: Official Assemblies of God logo image + `"The King's Temple"` / `"Assemblies of God • Offinso, Kumasi"`.

3. **Desktop Navigation Track (`DesktopNav.tsx`)**:
   * Links: `Home`, `New Here` (glowing badge), `About ▾`, `Ministries ▾`, `Media ▾`, `Events`, `Give`, `Contact`.

4. **Rich Megamenus (`MegaMenu.tsx`)**:
   * **About**: Our Story, Pastor Collins Ababio, Statement of Faith, Mission & Vision + Featured Card: *"Discover our journey of faith, leadership, and community."*
   * **Ministries**: Children, Youth, Young Adults, Women's, Men's, Worship, Prayer, Outreach.
   * **Media**: Live Service (`🔴 LIVE`), Sermons Archive, Church Updates.

5. **CTA Actions**:
   * Primary Action: `"Visit Us This Sunday"` (Deep blue gradient `from-primary-600 to-primary-500` with soft glow).
   * Secondary Action: `"🔴 LIVE"` broadcast trigger.

6. **Mobile Experience (`MobileMenu.tsx`, `MobileBottomActions.tsx`)**:
   * Drawer with featured cards: *New First-Time Guest?*, *Watch Sermons*, *Visit Us This Sunday*.
   * Fixed bottom action bar: `Location`, `Call Us`, `Visit Us`.

## Accessibility & SEO
* WCAG 2.1 AA focus rings (`outline: 3px solid #1E73E8`).
* Accessible ARIA attributes (`role="navigation"`, `aria-label="Search site"`).
* Fully responsive across 320px–1440px+ viewports.
