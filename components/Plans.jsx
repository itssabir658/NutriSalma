import Link from "next/link";
import { PLANS } from "@/lib/content";
import styles from "./Plans.module.css";

export default function Plans() {
  return (
    <section id="plans" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headCopy}>
            <div className={styles.kicker}>Plans</div>
            <h2 className={styles.title}>Choose the level of support you want.</h2>
          </div>
          <Link href="/plans" className={styles.compareBtn}>
            Compare all plans →
          </Link>
        </div>

        <div className={styles.grid}>
          {PLANS.map((p) => (
            <div key={p.name} className={p.dark ? styles.cardDark : styles.card}>
              <div className={styles.cardTop}>
                {p.badge ? <span className={styles.badge}>{p.badge}</span> : null}
                <div className={p.dark ? styles.nameDark : styles.name}>{p.name}</div>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{p.price}</span>
                <span className={styles.period}>{p.period}</span>
              </div>
              <p className={styles.blurb}>{p.blurb}</p>
              <div className={styles.features}>
                {p.features.map((f) => (
                  <div key={f} className={styles.feature}>
                    <span className={styles.featureCheck}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/plans" className={p.dark ? styles.ctaDark : styles.cta}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
