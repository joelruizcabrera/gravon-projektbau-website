# GRAVON Projektbau Website

Eine moderne, zweisprachige Website für GRAVON Projektbau GmbH - ein führendes Generalunternehmen für Bau- und Immobilienprojekte.

## 🚀 Features

### ✨ Moderne Technologien
- **Nuxt 3** - Vue.js Framework für Production-ready Apps
- **TypeScript** - Typisierte JavaScript-Entwicklung
- **Tailwind CSS** - Utility-first CSS Framework
- **GSAP** - Professionelle Animationen
- **Internationalisierung** - Vollständige DE/EN Unterstützung

### 🎨 Design & UX
- **Responsive Design** - Optimiert für alle Geräte
- **Moderne Animationen** - Smooth GSAP-Animationen
- **Dark Mode** - Automatische System-Präferenz Erkennung
- **Accessibility** - WCAG 2.1 AA konform
- **Performance** - Core Web Vitals optimiert

### 🌐 Mehrsprachigkeit
- **Deutsch** (Standard) - Vollständige Übersetzung
- **Englisch** - Internationale Zielgruppe
- **SEO-optimiert** - hreflang, strukturierte Daten
- **URL-Lokalisierung** - `/en/` Präfix für englische Seiten

### 📱 Seiten & Funktionen
- **Startseite** - Hero, Services, Projekte, About, Kontakt
- **Leistungen** - Detaillierte Service-Darstellung
- **Referenzen** - Projektportfolio mit Filterung
- **Über uns** - Unternehmensgeschichte und Team
- **Kontakt** - Formulare mit Validierung
- **Rechtliches** - Datenschutz, Impressum, AGB

## 🛠 Installation

### Voraussetzungen
- Node.js 18+
- npm 8+

### Setup
```bash
# Repository klonen
git clone https://github.com/gravon-projektbau/website.git
cd gravon-website

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### Build für Production
```bash
# Static Generation für Hosting
npm run generate

# Server-side Rendering
npm run build
npm run preview
```

## 📁 Projektstruktur

```
gravon-website/
├── assets/
│   ├── css/
│   │   ├── main.css              # Haupt-Styles
│   │   └── components.css        # Komponenten-Styles
│   └── scss/
│       └── variables.scss        # SCSS Variablen
├── components/
│   ├── About.vue                 # Über uns Sektion
│   ├── Contact.vue               # Kontakt Sektion
│   ├── Footer.vue                # Footer Komponente
│   ├── Header.vue                # Navigation
│   ├── Hero.vue                  # Hero Sektion
│   ├── LanguageSwitch.vue        # Sprachumschaltung
│   ├── Projects.vue              # Projekte Sektion
│   └── Services.vue              # Services Sektion
├── content/
│   ├── de/                       # Deutsche Inhalte
│   └── en/                       # Englische Inhalte
├── layouts/
│   └── default.vue               # Standard Layout
├── locales/
│   ├── de.json                   # Deutsche Übersetzungen
│   └── en.json                   # Englische Übersetzungen
├── middleware/
│   └── seo.global.js             # SEO Middleware
├── pages/
│   ├── about.vue                 # Über uns Seite
│   ├── contact.vue               # Kontakt Seite
│   ├── imprint.vue               # Impressum
│   ├── index.vue                 # Startseite
│   ├── privacy.vue               # Datenschutz
│   ├── projects.vue              # Projekte Seite
│   ├── services.vue              # Services Seite
│   └── terms.vue                 # AGB
├── plugins/
│   ├── accessibility.client.js   # Accessibility Features
│   ├── gsap.client.js            # GSAP Konfiguration
│   └── gtag.client.js            # Google Analytics
├── public/
│   ├── images/                   # Bilder und Assets
│   ├── favicon.ico               # Favicon
│   ├── robots.txt                # SEO Robots
│   └── sitemap.xml               # Sitemap
├── server/
│   └── api/
│       └── sitemap.xml.get.ts    # Dynamische Sitemap
├── error.vue                     # Fehlerseite
├── i18n.config.ts                # i18n Konfiguration
├── nuxt.config.ts                # Nuxt Konfiguration
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind Konfiguration
└── README.md                     # Diese Datei
```

## ⚙️ Konfiguration

### Umgebungsvariablen
```bash
# .env
NUXT_PUBLIC_SITE_URL=https://www.gravon.de
NUXT_GTAG_ID=G-XXXXXXXXXX
NODE_ENV=production
```

### SEO Konfiguration
- **Sitemap** - Automatisch generiert unter `/sitemap.xml`
- **Robots.txt** - Konfiguriert für Suchmaschinen
- **Strukturierte Daten** - JSON-LD für lokale Unternehmen
- **Open Graph** - Social Media Optimierung
- **Meta Tags** - Vollständige SEO-Abdeckung

### Analytics
- **Google Analytics 4** - Vollständige Tracking-Integration
- **Performance Monitoring** - Core Web Vitals Tracking
- **Event Tracking** - Kontaktformulare, Downloads
- **GDPR-konform** - Cookie-Einstellungen

## 🎨 Design System

### Farben
- **Primary**: Yellow 500 (#f59e0b)
- **Secondary**: Gray 900 (#111827)
- **Accent**: Blue 500 (#3b82f6)
- **Text**: Gray 900 (#111827)

### Typography
- **Font**: Inter (Google Fonts)
- **Größen**: Responsive Tailwind Scale
- **Gewichte**: 300-900

### Komponenten
- **Buttons**: Primary, Secondary, Outline
- **Cards**: Standard, Dark, Hover-Effekte
- **Forms**: Validierung, Accessibility
- **Modals**: Trap Focus, ESC-Handling

## 🔧 Entwicklung

### Verfügbare Scripts
```bash
npm run dev          # Entwicklungsserver
npm run build        # Production Build
npm run generate     # Static Site Generation
npm run preview      # Build Preview
npm run lint         # ESLint Check
npm run lint:fix     # ESLint Auto-Fix
npm run type-check   # TypeScript Check
npm run test         # Tests ausführen
npm run analyze      # Bundle Analyse
npm run clean        # Cache löschen
```

### Code Standards
- **ESLint** - Code Quality
- **Prettier** - Code Formatting
- **TypeScript** - Type Safety
- **Commitizen** - Consistent Commits

### Testing
- **Vitest** - Unit Tests
- **Playwright** - E2E Tests
- **Coverage** - Test Abdeckung

## 📱 Browser Support

### Desktop
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Keyboard Navigation** - Vollständige Tastaturunterstützung
- **Screen Reader** - ARIA Labels und Live Regions
- **Color Contrast** - Ausreichende Kontraste
- **Focus Management** - Sichtbare Focus-Indikatoren
- **Skip Links** - Navigation Shortcuts

### Features
- **High Contrast Mode** - System-Präferenz Support
- **Reduced Motion** - Animation Reduktion
- **Text Scaling** - Responsive Typography
- **Alternative Text** - Vollständige Bildbeschreibungen

## 🚀 Deployment

### Hosting-Optionen
- **Netlify** - Empfohlen für Static Sites
- **Vercel** - Optimiert für Nuxt 3
- **GitHub Pages** - Kostenlose Option
- **Cloudflare Pages** - Performance-optimiert

### Build-Konfiguration
```bash
# Netlify
npm run generate

# Vercel
npm run build

# GitHub Pages
npm run generate
```

### Performance
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Alle Grün
- **Bundle Size**: < 500kb
- **First Load**: < 2s

## 📊 Monitoring

### Analytics
- **Google Analytics 4** - Benutzerverhalten
- **Search Console** - SEO Performance
- **PageSpeed Insights** - Performance Monitoring

### Error Tracking
- **Console Logging** - Development
- **Error Boundaries** - Graceful Fehlerbehandlung
- **404 Handling** - Benutzerfreundliche Fehlerseiten

## 🔒 Sicherheit

### HTTPS
- **SSL/TLS** - Verschlüsselte Verbindung
- **HSTS Headers** - Security Headers
- **Content Security Policy** - XSS Schutz

### Datenschutz
- **DSGVO-konform** - Datenschutzerklärung
- **Cookie Consent** - Nutzereinwilligung
- **Minimale Datenerfassung** - Privacy by Design

## 📞 Support

### Kontakt
- **E-Mail**: development@gravon.de
- **Issues**: GitHub Issue Tracker
- **Dokumentation**: README und Code-Kommentare

### Wartung
- **Updates**: Monatliche Dependency Updates
- **Security**: Wöchentliche Security Audits
- **Performance**: Quartalsweise Performance Reviews

## 📄 Lizenz

© 2025 Joel Schwegmann. Alle Rechte vorbehalten.


---