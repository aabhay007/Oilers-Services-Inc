import Link from 'next/link';
import { SERVICES } from '@/constants/services';
import { slugify } from '@/lib/slugify';

export const metadata = {
  title: 'Services',
  description:
    'Explore Oilers Services Inc offerings including new home builds, renovations, general contracting, landscaping, demolition, grading, and snow removal across Alberta.',
};

export default function ServicesIndexPage() {
  return (
    <section className="section section-alt" aria-labelledby="services-page-heading">
      <div className="container">
        <h1 id="services-page-heading" className="section-title">
          Services
        </h1>
        <p style={{ maxWidth: '760px', margin: '0 auto 2rem', textAlign: 'center' }}>
          Browse our services below. Each service has its own page with details and a
          direct booking link.
        </p>

        <div className="services-grid" role="list">
          {SERVICES.map((service) => {
            const slug = slugify(service.title);
            return (
              <article key={service.title} className="service-card" role="listitem">
                <h2 style={{ marginTop: 0 }}>
                  <Link href={`/services/${slug}`}>{service.title}</Link>
                </h2>
                <p>{service.description}</p>
                <p style={{ marginTop: '0.75rem' }}>
                  <Link href={`/services/${slug}`} className="btn">
                    View details
                  </Link>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

