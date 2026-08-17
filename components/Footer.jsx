import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.mark}>N</span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>NutriSalma</span>
            <span className={styles.brandTagline}>The Balance Plate</span>
          </span>
        </div>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.copy}>Registered dietitian supervised · © 2026</div>
      </div>
    </footer>
  );
}
