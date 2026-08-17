"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.mark}>N</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>NutriSalma</span>
              <span className={styles.brandTagline}>The Balance Plate</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.burger}
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B4A50" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <Link href="/app" className={styles.login}>
              Login
            </Link>
            <Link href="/onboarding" className={styles.cta}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <div className={styles.panelTop}>
              <span className={styles.panelKicker}>Menu</span>
              <button
                type="button"
                aria-label="Close"
                className={styles.close}
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.panelLinks}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.panelLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className={styles.panelActions}>
              <Link href="/onboarding" className={styles.panelCta} onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
              <Link href="/app" className={styles.panelLogin} onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
