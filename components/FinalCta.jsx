import Link from "next/link";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section id="resources" className={styles.section}>
      <div className={styles.banner}>
        <div>
          <h2 className={styles.title}>Ready to make nutrition easier?</h2>
          <p className={styles.sub}>
            Start with a personalized plan designed around your goals and your real life.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link href="/onboarding" className={styles.primary}>
            Get My Personalized Plan →
          </Link>
          <Link href="/app/appointments" className={styles.secondary}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
