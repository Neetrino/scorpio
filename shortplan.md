1) Pages & Routes (Sitemap)

Create the following routes with clean, semantic HTML and accessible headings:

/ Home

/about About

/services Services index

/services/[slug] Service detail (dynamic)

/projects Projects index

/projects/[slug] Project case study (dynamic)

/academy Academy/Events (optional toggle)

/blog Blog index

/blog/[slug] Blog post

/contact Contact

/careers Careers (optional)

/(legal)/privacy Privacy Policy

/(legal)/terms Terms of Service

All pages must:

Use <main> with a single <h1> per page.

Include breadcrumb navigation where helpful.

Provide a consistent Header, Footer, and responsive layout container.

2) Global Layout & Components

Create reusable, accessible components with HTML-first mindset, then Tailwind classes:

Header with logo, language switcher (EN/RU/AM), main nav, mobile menu.

Footer with links, social icons, newsletter mini-form.

Hero section with title, lead paragraph, CTA buttons.

Section wrapper with standardized spacing.

Marquee/LogoStrip for client logos, responsive and lazy-loaded.

Testimonials carousel (keyboard navigable).

Stats (numeric highlights).

Card, Button, Tag, Badge, Tabs, Accordion.

ProjectCard, ServiceCard, BlogCard.

ContactForm with validation and success/error states.

LanguageSwitcher using next-intl.

AnimatedInView (intersection observer + framer motion).

Breadcrumbs with schema markup.

3) Home Page Structure (/)

Implement these blocks as independent sections using semantic HTML:

Hero

H1 and lead: “What started as a small team with big ambition has grown into a creative agency with a mission to ensure every business reaches its full digital potential.”

CTAs: “Get Proposal”, “See Work”.

Mission / Philosophy

Copy:

“Scorpio arose from a desire to bring people, projects, and clients into perfect harmony.”

“Collaboration is key to how we function because as a team, we are stronger than the sum of our parts.”

“Our customers regard us as an extension of their team. We regard them as family.”

“We’re coming from Space to make your digital Space an aesthetic place to connect and communicate.”

Services Preview

Grid of 5 cards (see Services list below), each with icon, short description, and link.

Selected Projects

3–6 ProjectCards with cover image, industry, short result metric.

Testimonials / Social Proof

Carousel with client name, role, and quote.

Logos Strip

Client logos in grayscale with hover reveal.

Blog/Insights Teaser

Latest 3 posts, “View all” link.

CTA

Strong call to action with small form or link to Contact.

4) About Page (/about)

Timeline “from small team to agency” (curvilinear visual is welcome).

Values (Collaboration, Creativity, Harmony, Accountability).

Team grid with photos and roles, accessible modals for bios.

Subtle “from Space” visual theme: particles/stars background as CSS-only or lightweight canvas, no performance tax.

5) Services
Services Index (/services)

Introduce the practice areas as cards:

Branding & Creative — Naming, identity systems, brand books, art direction.

Digital Marketing — SMM, influencer campaigns, paid ads, analytics.

Design & Development — UI/UX, responsive websites, landing pages, e-commerce.

Content & Production — Photo, video, motion design, post-production.

Consulting & Strategy — Market analysis, GTM, growth strategy, audits.

Each card links to a Service Detail.

Service Detail (/services/[slug])

Use a consistent, semantic template:

H1 service name

Intro paragraph (what/why)

“What’s included” list (ul/li)

Process steps (Discovery → Strategy → Execution → Optimization)

2–3 relevant case study teasers

CTA block: “Request a proposal”

FAQ accordion

Sidebar with contact mini-form

6) Projects
Projects Index (/projects)

Filters by industry and capability.

Masonry or grid layout with accessible filters and no focus traps.

Project Case Study (/projects/[slug])

Semantic sections:

H1 project title, client, industry, year.

Problem — short narrative.

Approach — strategy, creative direction, key decisions.

Execution — deliverables, stack/tools.

Results — metrics with numbers (CTR, conversions, revenue uplift).

Media gallery: images and optional embedded video, all lazy-loaded and described with alt text.

“Related projects” grid.

7) Academy/Events (/academy)

Event list with date, speakers, and registration form.

Optional photo gallery.

If disabled, keep route stub and feature flag to hide from nav.

8) Blog (/blog + /blog/[slug])

Index: cards with category tags, date, reading time.

Post page: semantic article structure, table of contents, code/quote blocks, share buttons, prev/next.

9) Contact (/contact)

Form fields: name, email, company, budget range (select), message.

Add spam protection (honeypot).

On submit: show success screen; log payload to console in dev.

10) Careers (/careers) (optional)

Open roles with filters; job detail pages with “Apply” modal.