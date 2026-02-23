import type { Metadata } from 'next';
import Image from 'next/image';
import FeedbackCarousel from '@/components/FeedbackCarousel';
import { SERVICES } from '@/constants/services';

export const metadata: Metadata = {
  title: 'Oilers Services Inc',
  description:
    'Oilers Services Inc — New Home Builds, Renovations, General Contracting, Landscaping, Gardening, Demolition, Soil Grading & Snow Removal. Commercial & Residential across Alberta. Head office in Edmonton.',
  openGraph: {
    title: 'Oilers Services Inc | General Contracting & Renovations | Alberta',
    description: 'New Home Builds, Renovations, Landscaping, Demolition, Snow Removal. Commercial & Residential across Alberta.',
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">Oilers Services Inc</h1>
          <p className="tagline">Invest in your future</p>
          <p className="sub">
          Oilers Services Inc provides professional construction, renovation, landscaping, demolition, grading, and 
          snow removal services for <b>residential and commercial</b>  clients. We are committed to quality workmanship, safety,
          and customer satisfaction.
          </p>
        </div>
      </section>

      <section id="services" className="section section-alt" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="section-title">Services We Provide</h2>
          <div className="services-grid" role="list">
            {SERVICES.map((service) => (
              <article key={service.title} className="service-card" role="listitem">
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt=""
                    width={400}
                    height={240}
                    sizes="(max-width: 600px) 100vw, 400px"
                    className="service-img"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <strong>Commercial and Residential</strong> — All over Alberta.
          </p>
        </div>
      </section>

      <section id="feedback" className="section feedback-section" aria-labelledby="feedback-heading">
        <div className="container">
          <h2 id="feedback-heading" className="section-title">What Our Clients Say</h2>
          <FeedbackCarousel />
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className="section-title">Contact Us</h2>
          <div className="contact-box">
            <div className="contact-block">
              <h3>Email</h3>
              <a href="mailto:oilersservicesinc@gmail.com">oilersservicesinc@gmail.com</a>
              <a href="mailto:oilers.secur@gmail.com">oilers.secur@gmail.com</a>
            </div>
            <div className="contact-block">
              <h3>Phone</h3>
              <a href="tel:+15879361629">+1 (587) 936-1629</a>
              <a href="tel:+14372996869">+1 (437) 299-6869</a>
            </div>
            <div className="contact-block">
              <h3>Head Office</h3>
              <p className="location-address">
                <strong>Oilers Services Inc</strong><br />
                1441 156 St SW<br />
                Edmonton, Alberta
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
