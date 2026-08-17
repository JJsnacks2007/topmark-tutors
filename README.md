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

## V16 update

- Phone number changed from the 0400 000 000 placeholder to 0450 113 766 site-wide (footers on all pages and the contact page).
- Click-to-call links updated to tel:+61450113766.

## V17 update

Two separate enquiry forms, both using the same Web3Forms access key:

1. contact.html: general tutoring programs enquiry. Email subject "New tutoring enquiry from the TopMark Tutors website", hidden field form_type=Tutoring programs. Crash Course removed from the preferred-support dropdown and replaced with a link to the Crash Course booking form.
2. crash-course.html#book: Crash Course expression of interest / booking form. Email subject "CRASH COURSE booking / expression of interest", hidden field form_type=Crash Course.

Crash Course form fields: intent (book now vs send me details first), student name, parent/guardian name, email, phone, year level, subject checkboxes (Biology, Chemistry, Physics, Mathematical Methods), promo code, message. Hidden fields package, price_applied and pricing_window are filled automatically so the emailed enquiry states the exact package and price.

Live pricing calculator: selecting subjects updates the price panel and an inline price chip beside the checkboxes. Early bird prices apply until 6 September 2026 (set in EARLY_END in assets/js/main.js); after that the script automatically switches to standard pricing and drops the strikethrough.

Pricing (all figures are the supplied table plus $50):
- 1 subject: early $349, standard $399, save $50
- 2 subjects: early $599, standard $699, save $100
- 3 subjects: early $799, standard $949, save $150
- All 4 subjects: early $949, standard $1,149, save $200

Payment details shown on the booking form: TopMark Tutors, BSB 065 175, Account 10542741, reference is the student's full name. Note states the invoice is sent once payment is received.

Crash Course subjects narrowed to Biology, Chemistry, Physics and Mathematical Methods.
Homepage: early bird promo panel added above the closing call to action, linking to the booking form.

## V18 update

The Crash Course now leads the site.

- Homepage hero replaced with a dark Crash Course hero: early bird tag, subject chips, early bird prices with standard prices struck through, save-up-to-$200 chip, and two calls to action. A side card shows a live countdown to the early bird deadline, the three key dates, and a Book Your Place button.
- The countdown reads from EARLY_END in assets/js/main.js (6 September 2026). After that date it automatically switches to "Standard pricing now applies".
- The original brand message ("Academic tutoring built for long-term results") moved directly below the hero as a centred band, keeping the year-round tutoring funnel intact.
- Site-wide top banner now promotes the Crash Course early bird instead of the free consultation.
- Homepage Crash Course promo panel moved from below the reviews to above them, so it follows the programs section and breaks up the dark panels.
- Homepage title and meta description now lead with the Crash Course for search.

## V19 update

Crash Course plan incorporated (public-facing details only; the financial model, tutor pay rates and internal open items from the planning document are deliberately not published).

Added to crash-course.html:
- Venue and dates: in person at Flinders University City campus, Monday 28 September to Saturday 10 October 2026, inside the SA Term 3 holidays.
- Format panel: 6 sessions of 2 hours per subject, capped at 10 students per subject, taught by top 1% ATAR achievers and medical students.
- Session structure section: 90 minute outline walkthrough with a live exam-style question per dot-point, 30 minute timed quiz, and a full mock exam in session 6 marked and returned within 48 hours with a mark-loss breakdown.
- Full schedule table for all 12 days, showing the paired scheduling (Methods and Physics Mon/Wed/Fri, Chemistry and Biology Tue/Thu/Sat) so multi-subject students have no clashes.
- Curriculum cards for each subject listing all six sessions plus that subject's SACE exam date.
- Eight-question FAQ section with FAQPage structured data, plus Course structured data (dates, venue, price tiers) for search.

Lead magnet added:
- assets/pdfs/topmark-14-sace-dotpoints.pdf (the free guide) with a cover thumbnail at assets/images/guide-cover.png.
- Gated download sections on the homepage (cream) and crash-course.html (dark). Name and email submit to Web3Forms with subject "Free guide download: 14 SACE dot-points" and form_type=Lead magnet, then the download button is revealed on success.
- "Free SACE Guide" added to the footer Explore column site-wide, linking to index.html#free-guide.

Homepage hero updated with the venue, dates, session count and cohort cap, and the key-dates card now includes the course run dates.

## V20 update

- Free guide form now collects a phone number as well as first name and email, on both the homepage and the Crash Course page. The field is required and the number is included in the emailed submission.
- Cohort cap removed everywhere. "Capped at 10 students per subject" is gone from the format panel, the intro copy, the booking section, the final call to action, the homepage hero and the FAQ (including the FAQ structured data). Replaced with "small groups" and "limited places".
- TopMark textbook added: every student receives a TopMark textbook for each subject they enrol in. Mentioned in the format panel, the intro copy, the session structure intro, the pricing fine print, the meta description, the homepage hero and promo panel, and as a new FAQ ("Do I get any materials to keep?") with matching structured data.

## V21 update

- Free guide PDF rebuilt (assets/pdfs/topmark-14-sace-dotpoints.pdf): the TopMark logo now appears on the cover in a white lockup and as a small mark in every page footer. All em dashes removed from the guide copy. Crash Course pricing on the final page updated to "From $349" and the TopMark textbook inclusion added. Source: /root/work/guide/guide.html, rendered to A4 PDF.
- Guide cover thumbnail on the website regenerated from the new PDF.
- Ahmed's founder photo replaced with the new supplied image, cropped to the same 2:3 portrait (1024x1536) used elsewhere.
- Favicons added: favicon.ico at the site root plus 16, 32, 48, 192 and 512 px PNGs and an apple-touch-icon, generated from the logo emblem. Linked in the head of all 15 pages, with site.webmanifest and a theme-color meta.

## V22 update

- Booking form "Promo code" field renamed to "Promo code or referral source" (field name promo_or_referral), with a placeholder prompting either a code or the referrer's name.
- New Payment block on the booking form: states that a $99 deposit secures a place with the balance due before the first session, plus a checkbox "I would like to discuss payment options" (field name payment_options).
- Deposit noted in the price summary panel, the payment details panel, and the pricing fine print.
- New Referral program section on crash-course.html (#referral, dark panel between pricing and the booking form): $30 for the referrer, 10 per cent off for the referred student, with a three-step how-it-works and a note that referrals are confirmed once the referred student has paid.
- Two new FAQs with matching structured data: paying a deposit, and how the referral program works.
- Homepage hero note and promo panel now mention the $99 deposit and the referral offer.

## V23 update

- Fieldset headings on the booking form ("What would you like to do?", "Which subjects?", "Payment") now sit fully on the white card above their cream boxes instead of straddling the border. Done by absolutely positioning the legend above the fieldset (CSS V23 block), which also lets the fieldset draw an unbroken top border and lines the headings up with the other field labels.
- Flinders University City campus removed as the venue. The crash course now reads "in person in Adelaide" in the hero eyebrow, the format panel, the intro copy, the meta description and the homepage hero line. The venue FAQ now says "In person in Adelaide... We confirm the exact venue with you when you book", and the Course structured data location is Adelaide, SA.
- The free guide PDF was rebuilt with the same venue change on its final page, and the cover thumbnail regenerated.
- Note: Flinders references on about.html (the founders as Flinders medical students) and in the UCAT blog post (Flinders as a UCAT university) are credentials and facts, not the venue, and were intentionally left alone.
