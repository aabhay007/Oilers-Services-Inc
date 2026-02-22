import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Oilers Services Inc — New Home Builds, Renovations, General Contracting, Landscaping, Gardening, Demolition, Soil Grading & Snow Removal. Commercial & Residential across Alberta. Head office in Edmonton.',
  openGraph: {
    title: 'Oilers Services Inc | General Contracting & Renovations | Alberta',
    description: 'New Home Builds, Renovations, Landscaping, Demolition, Snow Removal. Commercial & Residential across Alberta.',
  },
};

const SERVICES = [
  { title: 'New Home Build', description: 'Full-service new home construction across Alberta.', image: 'https://imgs.search.brave.com/ejcMjvw2Xyx6Usoh2nbhkUaA1_o8wpB2IXt5hlkhgrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MTQyMjgwL3Bob3Rv/L2NvdXBsZS1hbmQt/YnVpbGRlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dk0w/YU1WMUt0VUtwZUFz/d25ia01jWFZoY3Nq/dFlLLV8yYzVNWWpB/cnVPWT0' },
  { title: 'Renovations', description: 'Residential and commercial renovation projects.', image: 'https://imgs.search.brave.com/IWQ8Taib9gdFSTCY_aWlA28-WK98LVqt0BY85WBc2mk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NjY5MTEzOC9waG90/by95b3VuZy1jb3Vw/bGUtbG9vay1hdC1o/b21lLXBsYW5zLXdp/dGgtYnVpbGRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/THNDZGVoWU9zSjJh/Q1h5aWtQSU5kcmp4/TWt3Nm5UeGJienpM/WFFRT0lMTT0' },
  { title: 'General Contracting', description: 'Project management and coordination for all scales.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { title: 'Landscaping', description: 'Design and installation for outdoor spaces.', image: 'https://imgs.search.brave.com/6Z5JzycS7TngxSZWgk9tskc5UG8jUzGucAy487BWnf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY0/MzU0OTQzL3Bob3Rv/L2xhbmRzY2FwZS1k/ZXNpZ24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXhVUzV6/Q0I2MlNYWUE5UTI3/Mmo3anlldW9FVFRQ/VXFPQlNiUWFyeVVp/elE9' },
  { title: 'Gardening', description: 'Maintenance and seasonal garden care.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
  { title: 'Demolition', description: 'Safe, efficient demolition services.', image: 'https://imgs.search.brave.com/QWDJHXzOaECvZexqL5RhCb6NeiwF3IF_mDosxZte3QM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NTMwMjg5My9waG90/by9kZW1vbGl0aW9u/LWNvbnRyb2wtc3Vw/ZXJ2aXNvci1hbmQt/Zm9yZW1hbi1kaXNj/dXNzaW5nLW9uLWRl/bW9saXNoLWJ1aWxk/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncUhFMTdQ/X1oyVnBvTmdMdVJu/VUE3X0xMdXh4RWxV/Zmp3dDlJSktBenhj/PQ' },
  { title: 'Soil Grading', description: 'Site preparation and soil grading.', image: 'https://imgs.search.brave.com/lkr0tS2KE6ejEh21EEo0rAMFaWvOZ167mZ2muHSVB2s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zb2ls/cy1pbmMuY29tL3dw/LWNvbnRlbnQvdGhl/bWVzL3lvb3RoZW1l/L2NhY2hlL2ZlL1do/YXQtU29pbC1Uby1V/c2UtRm9yLUdyYWRp/bmctQXJvdW5kLUhv/dXNlLXNjYWxlZC1m/ZTU5NzRhMC5qcGVn' },
  { title: 'Snow Removal', description: 'Commercial and residential snow removal.', image: 'https://imgs.search.brave.com/FGyhUOVkX-sEXnlM_2Q6liyohLhZbqq39Q03fFcRTs0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbm93LXJlbW92/YWwtY2l0eS13b3Jr/ZXItaGVscHMtc2hv/dmVsLXNub3dwbG93/XzEwOTI4NS01OTc0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">Oilers Services Inc</h1>
          <p className="tagline">Invest in your future</p>
          <p className="sub">
            Commercial and residential contracting across Alberta — new home builds, renovations, landscaping, demolition, soil grading, and snow removal.
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
