'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SCROLL_THRESHOLD = 80;

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`header ${compact ? 'header--compact' : ''}`}
      role="banner"
    >
      <div className="container header-inner">
        <div className="header-brand">
          <Link
            href="/"
            className="logo-link"
            aria-label="Oilers Services Inc - Home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo/oilersservices_logo.png"
              alt="Oilers Services Inc - Invest in your future"
              width={260}
              height={96}
              priority
              className="logo-img"
            />
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav ${menuOpen ? 'nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <Link
                style={{ color: '#2e4866' }}
                href="/#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                style={{ color: '#2e4866' }}
                href="/request-appointment"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                style={{ color: '#2e4866' }}
                href="/#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li><Link style={{ color: '#2e4866' }} href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
