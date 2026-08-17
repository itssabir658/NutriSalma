import { HOW_IT_WORKS } from "@/lib/content";
import styles from "./HowItWorks.module.css";

const ICONS = {
  assessment: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>
  ),
  plan: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </>
  ),
  progress: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </>
  ),
  adapt: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
};

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>How it works</div>
          <h2 className={styles.title}>Your nutrition journey, made simple.</h2>
          <p className={styles.sub}>From understanding your needs to continuously improving your plan.</p>
        </div>
        <div className={styles.grid}>
          {HOW_IT_WORKS.map((step) => (
            <div key={step.num} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.num}>{step.num}</span>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#A8465F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[step.icon]}
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
