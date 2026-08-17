import styles from "./HumanSupport.module.css";

export default function HumanSupport() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.kicker}>Human support</div>
        <h2 className={styles.title}>Experts handle what matters.</h2>
        <p className={styles.sub}>
          Every plan is reviewed and approved by a registered dietitian before it
          reaches you — and they stay with you as it changes.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.userCard}>
          <div className={styles.cardTop}>
            <span className={styles.cardTopLabel}>User dashboard</span>
            <span className={styles.userBadge}>Sarah K.</span>
          </div>
          <div className={styles.userBody}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Today&rsquo;s plan</span>
              <span className={styles.rowValue}>3 meals · 1,390 kcal</span>
            </div>
            <div className={styles.progressBlock}>
              <div className={styles.progressRow}>
                <span>Progress</span>
                <span className={styles.progressValue}>68% of weekly goal</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} />
              </div>
            </div>
            <div className={styles.statPair}>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Water</div>
                <div className={styles.statValue}>1.8L</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Meals logged</div>
                <div className={styles.statValue}>2 of 3</div>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Messages</span>
              <span className={styles.newBadge}>1 new</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Appointment</span>
              <span className={styles.rowValue}>Mon 7 Sep · 4:30 PM</span>
            </div>
          </div>
        </div>

        <div className={styles.dietitianCard}>
          <div className={styles.cardTop}>
            <span className={styles.cardTopLabelDark}>Dietitian dashboard</span>
            <span className={styles.dietitianBadge}>Dr. Amina R.</span>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>48</div>
              <div className={styles.metricLabel}>Active clients</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>6</div>
              <div className={styles.metricLabel}>New assessments</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValueWarn}>3</div>
              <div className={styles.metricLabel}>Need attention</div>
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileKicker}>Client profile</div>
            <div className={styles.profileTop}>
              <span className={styles.profileAvatar}>SK</span>
              <div>
                <div className={styles.profileName}>Sarah Kova&#269;</div>
                <div className={styles.profileMeta}>Goal: improve nutrition · Week 6</div>
              </div>
            </div>
            <div className={styles.profileStats}>
              <div className={styles.profileStatRow}><span>Adherence</span><span>86%</span></div>
              <div className={styles.profileStatRow}><span>Weight trend</span><span>&minus;1.8 kg / 6 wks</span></div>
              <div className={styles.profileStatRow}><span>Plan status</span><span className={styles.pending}>Pending approval</span></div>
            </div>
          </div>
          <div className={styles.actions}>
            <span className={styles.actionPrimary}>Approve plan</span>
            <span className={styles.actionGhost}>Message client</span>
            <span className={styles.actionGhost}>Schedule consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
