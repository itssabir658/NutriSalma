import Link from "next/link";
import styles from "./StubScreen.module.css";

export default function StubScreen({ title }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.kicker}>IN PRODUCTION</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>
          This screen is next in the build. The landing experience, meal plan and
          swap flow are live now.
        </p>
        <Link href="/" className={styles.back}>
          ← Back to the landing page
        </Link>
      </div>
    </div>
  );
}
