'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SCROLL_THRESHOLD = 80;

export default function Header() {
  const [compact, setCompact] = useState(false);

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
        <Link href="/" className="logo-link" aria-label="Oilers Services Inc - Home">
          <Image
            src="/images/logo/oilersservices_logo.png"
            alt="Oilers Services Inc - Invest in your future"
            width={260}
            height={96}
            priority
            className="logo-img"
          />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
