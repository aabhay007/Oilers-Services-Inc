import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import ContactPopup from '@/components/ContactPopup';

export const metadata: Metadata = {
  metadataBase: new URL('https://oilersservicesinc.com'),
  title: {
    default: 'Oilers Services Inc | General Contracting & Renovations | Alberta',
    template: '%s | Oilers Services Inc',
  },
  description:
    'Oilers Services Inc offers New Home Builds, Renovations, General Contracting, Landscaping, Gardening, Demolition, Soil Grading & Snow Removal across Alberta. Commercial & Residential. Invest in your future.',
  keywords: [
    'Oilers Services Inc',
    'Edmonton contractor',
    'Alberta general contracting',
    'new home build Alberta',
    'renovations Edmonton',
    'landscaping Alberta',
    'demolition',
    'snow removal Edmonton',
    'soil grading',
    'commercial residential contractor',
  ],
  openGraph: {
    title: 'Oilers Services Inc | General Contracting & Renovations | Alberta',
    description: 'New Home Builds, Renovations, Landscaping, Demolition, Snow Removal. Commercial & Residential across Alberta. Invest in your future.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/' },
  verification: {
    google: "frevvI2SQ1O5En_CUhWv-jqPN7DMRQdM-zGlcRUWibg",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Oilers Services Inc',
  description: 'New Home Builds, Renovations, General Contracting, Landscaping, Gardening, Demolition, Soil Grading & Snow Removal. Commercial & Residential across Alberta.',
  slogan: 'Invest in your future',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1441 156 St SW',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: { '@type': 'State', name: 'Alberta' },
  email: ['oilersservicesinc@gmail.com', 'oilers.secur@gmail.com'],
  priceRange: '$$',
  serviceType: [
    'New Home Build',
    'Renovations',
    'General Contracting',
    'Landscaping',
    'Gardening',
    'Demolition',
    'Soil Grading',
    'Snow Removal',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <ContactPopup />
      </body>
    </html>
  );
}
