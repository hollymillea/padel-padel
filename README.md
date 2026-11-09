# ¡Padel Padel!

The website for ¡Padel Padel!, a padel club in Eltham, SE9. Built with Next.js and exported as a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the finished site to /out
```

`/out` is plain HTML, CSS and JS, so it can go on any static host (Netlify, Vercel, GitHub Pages, S3).

## Where things live

- `src/data/site.js` holds the content the club will change: booking links, prices, the weekly timetable, partners and socials.
- `src/app/page.js` is the home page and `src/app/about/page.js` is the About page.
- `src/app/globals.css` holds all the styles, ordered top to bottom like the home page.
- `src/components/Header.js` is the line navbar. It also moves the hero logo up into the header as you scroll.
- `public/images` holds the photos and logos. `public/textures` holds the clay grain.

## Fonts

- Headings use Barlow Condensed, the club's current headline font, loaded from Google Fonts at build time.
- Body text uses Helvetica Now Display from `public/fonts`. It's a licensed font, so check the licence covers web use before going live.

## Still to do

- Corporate hire, Sponsorships, Gift cards, FAQs, Privacy and Terms point at the footer until those pages exist.
- The photos are full-size JPEGs. Resize and compress them before launch.
