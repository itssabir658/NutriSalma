import { AUTOMATIONS, WORKFLOW_STEPS } from "@/lib/content";
import styles from "./Automation.module.css";

const CHANNELS = ["Web", "Email", "WhatsApp", "SMS", "Push"];

export default function Automation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>Automation</div>
          <h2 className={styles.title}>Smart nutrition. Less effort.</h2>
          <p className={styles.sub}>
            The platform handles the repetitive work — analysis, planning, reminders,
            reporting — so the time you spend with a dietitian is spent on decisions,
            not admin.
          </p>
        </div>

        <div className={styles.workflow}>
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.num} className={styles.workflowStep}>
              <div className={styles.workflowNode}>
                <div className={styles.workflowNum}>{step.num}</div>
                <div className={styles.workflowLabel}>{step.label}</div>
              </div>
              {step.hasNext ? (
                <svg width="26" height="10" viewBox="0 0 26 10" className={styles.workflowArrow} aria-hidden="true">
                  <line x1="0" y1="5" x2="26" y2="5" stroke="#B07E90" strokeWidth="1.5" strokeDasharray="4 4" className={styles.dashLine} />
                </svg>
              ) : null}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {AUTOMATIONS.map((a) => (
            <div key={a.title} className={styles.card}>
              <div className={styles.cardIcon}>{a.icon}</div>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardBody}>{a.body}</p>
              {a.channels ? (
                <div className={styles.channels}>
                  {CHANNELS.map((c) => (
                    <span key={c} className={styles.channel}>{c}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
