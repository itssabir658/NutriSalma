"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  NUTRITION_MYTHS,
  NUTRITION_TALKS,
  NUTRITION_TALK_TOPICS,
  NUTRITION_TIPS,
} from "@/lib/content";
import styles from "./NutritionHub.module.css";

const TABS = [
  { id: "tips", label: "Recommendations" },
  { id: "myths", label: "Myth vs Fact" },
  { id: "talk", label: "Let's Talk" },
];

const ICONS = {
  plate: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.2" />
    </>
  ),
  drop: <path d="M12 3.2s5.4 5.4 5.4 9a5.4 5.4 0 0 1-10.8 0c0-3.6 5.4-9 5.4-9z" />,
  spark: (
    <>
      <path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21" />
      <path d="M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 21V9" />
      <path d="M12 13c0-2 1.4-3.6 3.4-3.6C15.4 11.4 14 13 12 13z" />
      <path d="M12 13c0-2-1.4-3.6-3.4-3.6C8.6 11.4 10 13 12 13z" />
      <path d="M12 8.4c0-2 1.4-3.6 3.4-3.6 0 2-1.4 3.6-3.4 3.6z" />
      <path d="M12 8.4c0-2-1.4-3.6-3.4-3.6 0 2 1.4 3.6 3.4 3.6z" />
    </>
  ),
  repeat: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function MythCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`${styles.myth} ${flipped ? styles.mythFlipped : ""}`}
      onClick={() => setFlipped((f) => !f)}
      aria-expanded={flipped}
    >
      <span className={styles.mythInner}>
        <span className={styles.mythFront} aria-hidden={flipped}>
          <span className={styles.mythTag}>Myth</span>
          <span className={styles.mythText}>{item.myth}</span>
          <span className={styles.mythHint}>Tap to reveal the fact</span>
        </span>
        <span className={styles.mythBack} aria-hidden={!flipped}>
          <span className={styles.factTag}>Fact</span>
          <span className={styles.factText}>{item.fact}</span>
          <span className={styles.mythHintBack}>Tap to flip back</span>
        </span>
      </span>
    </button>
  );
}

export default function NutritionHub() {
  const [tab, setTab] = useState("tips");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="learn" className={styles.section} ref={sectionRef}>
      <div className={`${styles.inner} ${visible ? styles.revealed : ""}`}>
        <div className={styles.head}>
          <div className={styles.kicker}>Nutrition education</div>
          <h2 className={styles.title}>Let&rsquo;s Talk Nutrition.</h2>
          <p className={styles.sub}>
            Simple guidance, practical recommendations, and the nutrition myths you
            deserve to know the truth about.
          </p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Nutrition topics">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`nh-tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`nh-panel-${t.id}`}
              className={`${styles.tab} ${tab === t.id ? styles.tabActive : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "tips" ? (
          <div
            className={styles.panel}
            role="tabpanel"
            id="nh-panel-tips"
            aria-labelledby="nh-tab-tips"
          >
            <div className={styles.rail}>
              {NUTRITION_TIPS.map((tip) => (
                <article key={tip.id} className={styles.tip}>
                  <span className={styles.tipIcon}>
                    <Icon name={tip.icon} />
                  </span>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipBody}>{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "myths" ? (
          <div
            className={styles.panel}
            role="tabpanel"
            id="nh-panel-myths"
            aria-labelledby="nh-tab-myths"
          >
            <div className={styles.rail}>
              {NUTRITION_MYTHS.map((m) => (
                <MythCard key={m.id} item={m} />
              ))}
            </div>
          </div>
        ) : null}

        {tab === "talk" ? (
          <div
            className={styles.panel}
            role="tabpanel"
            id="nh-panel-talk"
            aria-labelledby="nh-tab-talk"
          >
            <h3 className={styles.talkHeading}>Things We Don&rsquo;t Talk About Enough.</h3>
            <div className={styles.rail}>
              {NUTRITION_TALKS.map((t) => (
                <article key={t.id} className={styles.talk}>
                  <h4 className={styles.talkTitle}>{t.title}</h4>
                  <p className={styles.talkBody}>{t.body}</p>
                </article>
              ))}
            </div>
            <ul className={styles.topics}>
              {NUTRITION_TALK_TOPICS.map((topic) => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className={styles.cta}>
          <div className={styles.ctaCopy}>
            <h3 className={styles.ctaTitle}>
              Have a nutrition question that&rsquo;s specific to you?
            </h3>
            <p className={styles.ctaBody}>
              General advice is a great place to start. Personalized guidance starts
              with understanding you.
            </p>
          </div>
          <Link href="/app/appointments" className={styles.ctaBtn}>
            Book a Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
