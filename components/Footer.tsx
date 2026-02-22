import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Oilers Services Inc</p>
          <p className="footer-tagline">Invest in your future</p>
        </div>
        <div className="footer-links">
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <p>Head Office: 1441 156 St SW, Edmonton, Alberta</p>
          <p>Serving Commercial &amp; Residential — All Over Alberta</p>
        </div>
        <p className="footer-copy">
          &copy; {currentYear} Oilers Services Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
