# TopMark Tutors Website V3

Updated with requested changes:
- Removed hero overlay boxes
- Removed More than extra classes, Student progress, and Tutor standard sections
- Added separate pages for Private Tutoring, Subject Mastery, and Mentorship
- Results are shown as separate cards
- Added review carousel with arrows
- Subjects grid wraps to new rows instead of horizontal scrolling
- Added founders section for Ahmed Aly and Ali Alebadi
- Calendly link set to https://calendly.com/topmarktutors99/30min

Before publishing, replace placeholder ATAR results/reviews with real verified content and replace the Formspree placeholder in contact.html.


## V4 changes

- Student results now show name, ATAR and school inside one card per student.
- Subject cards are wider and subject headings are smaller so long names fit better.
- Founder cards now show an image, short summary and click-to-open detailed profile modal.
- Placeholder founder images are in `assets/images/ahmed-placeholder.svg` and `assets/images/ali-placeholder.svg`. Replace these with real photos when ready.


## V5 image update

Added uploaded images to the site:

- `assets/images/ahmed-aly.jpg`
- `assets/images/ali-alebadi.jpg`
- `assets/images/topmark-logo.png`

The logo is now used in the header/footer and founder photos are used on the About page cards and profile popups.


## V6 update

Founder card images now use `object-fit: contain` so the full uploaded photo is visible instead of cropped.


## V7 update

Founder images are no longer cropped:
- Founder cards use the full uploaded photo.
- Profile popup images use the full uploaded photo.
- Removed forced square/rectangle cropping from `.profile-head img`.


## V8 update

Founder profile popup images are smaller while still using `object-fit: contain` so the full photo remains visible.


## V9 update

Updated founder subject listings:

- Ali: Physics, Chemistry, Mathematical Methods, General Mathematics, Medicine & Dentistry Preparation
- Ahmed: Biology, Physics, General Mathematics, Mathematical Methods, UCAT, Business Innovation

## V10 update

- Student results section redesigned with real 2025 cohort results: stat highlights (99.80 highest ATAR, 100% above 90, 3 SACE Merits), subject A+ summary pills, top-performer cards with per-subject grade chips (Merits highlighted), and a compact grid for remaining scores.
- Names and schools in the results section are randomised for student privacy (scores are the real 2025 results); a footnote on the site discloses this.
- Placeholder reviews replaced with 5 real student reviews (names randomised, all longer reviews lightly excerpted for card layout).

## V11 update

- Removed all em dashes from site copy; Physics A+ count corrected to 7 (and seventeen A/A+ grades total).
- Resources page hidden for now: removed from navigation, footer and hero button (hero now links to Programs); resources.html marked noindex until real resources are ready. To restore it, re-add the nav/footer links and remove the noindex meta tag.
- Blog rebuilt with three full SEO-optimised articles: "What is the UCAT?" (blog-what-is-ucat.html), "What is the ATAR and SACE?" (blog-what-is-atar-and-sace.html) and an expanded "How to Choose the Right Tutor in Adelaide". Facts checked against ucat.edu.au, sace.sa.edu.au and satac.edu.au (July 2026).
- Each article has: custom SVG hero + infographics (assets/images/blog/), meta description, canonical URL, Open Graph/Twitter tags with PNG social images (assets/images/blog/og/), BlogPosting + BreadcrumbList + FAQPage structured data, FAQ accordions, internal links and CTAs.
- Blog hub page updated with thumbnails and new titles; sitemap.xml now includes all blog URLs.

## V12 update

- Programs section rebuilt with detailed content across index.html, programs.html and all three program pages.
- Private Tutoring: full page explaining the one-on-one model, what is included, who it suits and how a typical week runs.
- Subject Mastery: rebuilt around its three pillars (group classes + weekly one-on-one catch-ups, TopMark textbooks and structure, assignment/keyword answering technique) with the weekly rhythm.
- Mentorship renamed to Academic Mentorship site-wide and rebuilt with the eight program pillars: goal setting, accountability, study skills, confidence and mindset, career and subject guidance, parent communication, support outside lessons, and motivation.
- New pillar-card styles added (CSS V12); page titles and meta descriptions updated for all program pages.

## V13 update

- Contact form connected to Web3Forms (endpoint https://api.web3forms.com/submit) using the provided access key.
- Added hidden email subject line, from_name, and a botcheck honeypot field for spam protection.
- "Preferred support" option updated to Academic Mentorship; removed the "form setup required" note.
- Submissions go to the email address linked to the Web3Forms access key. Free plan includes 250 submissions/month; manage at web3forms.com.

## V14 update

- Contact email changed to Topmarktutors99@gmail.com site-wide (footers, contact page, form error message).
- New SACE Exam Crash Course page (crash-course.html): pre-exam revision bootcamp covering Physics, Chemistry, Mathematical Methods, Specialist Mathematics, General Mathematics and Biology. Kept general (no dates/prices); families enquire for the next intake. Added to the main nav, footer, programs page callout and sitemap.
- Enquiry form: added "Crash Course" to preferred support and "Specialist Mathematics" to subjects.
- Specialist Mathematics added to the Subjects page and home meta description.
