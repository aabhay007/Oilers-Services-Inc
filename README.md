# Oilers Services Inc — Static Website

SEO-friendly static Next.js site for **Oilers Services Inc**, themed with the company logo (teal, modern, professional).

## Features

- **Static export** — `next build` outputs static HTML/CSS/JS to `out/`
- **SEO** — Meta titles, descriptions, Open Graph, semantic HTML, heading hierarchy
- **Theme** — Brand teal (#2a5a5a) and tagline styling from the logo
- **Accessible** — Landmarks, aria-labels, skip-friendly structure

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Static files are in the `out/` folder. Deploy `out/` to any static host (Vercel, Netlify, S3, etc.).

## Logo

The header uses `public/logo.png`. Copy your Oilers Services Inc logo into `public/logo.png` (e.g. from the image you attached). If the file is missing, the header shows a text fallback. Use a PNG with transparent or dark background for best look.

## Contact Form Popup

The site includes a popup form that appears 10 seconds after page load. To enable email submissions:

1. Sign up at [EmailJS](https://www.emailjs.com/) (free tier available)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Name
   - `{{from_phone}}` - Phone number
   - `{{message}}` - Requirements
4. Get your Public Key from Account > API Keys
5. Copy your Service ID and Template ID
6. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

**Note:** If EmailJS is not configured, the form will fall back to opening the user's email client (mailto).

## Company details (on site)

- **Company:** Oilers Services Inc  
- **Tagline:** Invest in your future  
- **Services:** New Home Build, Renovations, General Contracting, Landscaping, Gardening, Demolition, Soil Grading, Snow Removal  
- **Scope:** Commercial & Residential — All Over Alberta  
- **Head Office:** 1441 156 St SW, Edmonton, Alberta  
- **Email:** oilersservicesinc@gmail.com, oilers.secur@gmail.com  
- **Phone:** +1 (587) 936-1629, +1 (437) 299-6869  
