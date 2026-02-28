import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/constants/services";
import { SERVICES_CONTENT } from "@/constants/servicesContent";
import { slugify } from "@/lib/slugify";
import type { ContentSection } from "@/constants/servicesContent";

type Service = (typeof SERVICES)[number];

function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => slugify(s.title) === slug);
}

function getServiceContent(slug: string) {
  return SERVICES_CONTENT[slug];
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: slugify(s.title) }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service not found" };

  const content = getServiceContent(params.slug);
  const description = content
    ? `${content.subtitle} ${content.intro.slice(0, 120)}...`
    : service.description;

  return {
    title: content?.title ?? service.title,
    description,
  };
}

function ServiceContentSection({ section }: { section: ContentSection }) {
  return (
    <div className="service-content-section">
      {section.heading && (
        <h2 className="service-content-heading">{section.heading}</h2>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={`p-${i}`} className="service-content-p">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="service-content-ul">
          {section.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {section.paragraphsAfter?.map((p, i) => (
        <p key={`pa-${i}`} className="service-content-p">
          {p}
        </p>
      ))}
      {section.numberedList && section.numberedList.length > 0 && (
        <ol className="service-content-ol">
          {section.numberedList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

// function ContactBlock() {
//   return (
//     <div className="service-contact-block">
//       <h2>Contact Us – Let&apos;s Build Your Future Together</h2>
//       <p>
//         Ready to get started? Reach out to our team for a consultation or quote.
//       </p>
//       <div className="service-contact-grid">
//         <div>
//           <h3>Kamal Kaindal – Field Manager</h3>
//           <a href="tel:+15879361629">587-936-1629</a>
//         </div>
//         <div>
//           <h3>Sachin Khatkar – Project Manager</h3>
//           <a href="tel:+14372996869">437-299-6869</a>
//         </div>
//         <div>
//           <h3>Email</h3>
//           <a href="mailto:oilersservicesinc@gmail.com">oilersservicesinc@gmail.com</a>
//           <br />
//           <a href="mailto:oilers.secur@gmail.com">oilers.secur@gmail.com</a>
//         </div>
//         <div>
//           <h3>Head Office</h3>
//           <p>1441 156 St SW, Edmonton, Alberta</p>
//         </div>
//       </div>
//       <p className="service-contact-note">
//         Services: Commercial &amp; Residential – All Over Alberta
//       </p>
//     </div>
//   );
// }

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  const content = getServiceContent(params.slug);

  if (!service) notFound();

  return (
    <section
      className="section service-detail-page"
      aria-labelledby="service-heading"
    >
      <div className="container service-detail-container">
        <p className="service-breadcrumb">
          <Link href="/services">Services</Link> / <span>{service.title}</span>
        </p>

        <div className="service-detail-layout">
          <div className="service-detail-main">
            <h1 id="service-heading" className="service-detail-title">
              {content?.title ?? service.title}
            </h1>

            {content ? (
              <>
                <p className="service-detail-subtitle">{content.subtitle}</p>
                <p className="service-detail-intro">{content.intro}</p>

                {content.sections.map((section, i) => (
                  <ServiceContentSection key={i} section={section} />
                ))}

                {/* <ContactBlock /> */}

                <div className="service-cta-block">
                  <p className="service-cta-text">{content.cta}</p>
                  <div className="service-cta-buttons">
                    <Link href="/request-appointment" className="btn">
                      Request Appointment
                    </Link>
                    <Link href="/#contact" className="btn btn-secondary">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="service-detail-intro">{service.description}</p>
                <div
                  className="service-cta-buttons"
                  style={{ marginTop: "1.5rem" }}
                >
                  <Link href="/request-appointment" className="btn">
                    Request Appointment
                  </Link>
                  <Link href="/#contact" className="btn btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </>
            )}
          </div>

          <aside className="service-detail-sidebar">
            <div className="service-sidebar-card">
              <div className="service-sidebar-image">
                <img
                  src={service.image}
                  alt=""
                  width={400}
                  height={260}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div className="service-sidebar-info">
                <p>
                  Serving residential &amp; commercial clients across Alberta.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="service-related">
          <h2>Related services</h2>
          <div className="service-related-links">
            {SERVICES.filter((s) => s.title !== service.title)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.title}
                  href={`/services/${slugify(s.title)}`}
                  className="service-related-link"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
