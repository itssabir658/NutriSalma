"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HERO_MEALS,
  HERO_NOTIFICATIONS,
  HERO_KCAL_GOAL,
  HERO_KCAL_TARGET,
  waLink,
} from "@/lib/content";
import styles from "./Hero.module.css";

const CIRCUMFERENCE = 314.16;

export default function Hero() {
  const [kcal, setKcal] = useState(0);
  const [notifIndex, setNotifIndex] = useState(0);
  const rafRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setKcal(Math.round(HERO_KCAL_TARGET * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    intervalRef.current = setInterval(() => {
      setNotifIndex((i) => (i + 1) % HERO_NOTIFICATIONS.length);
    }, 3400);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  const pct = HERO_KCAL_TARGET / HERO_KCAL_GOAL;
  const dashOffset =
    CIRCUMFERENCE * (1 - pct * (kcal / HERO_KCAL_TARGET || 0));

  const notifA = HERO_NOTIFICATIONS[notifIndex];
  const notifB = HERO_NOTIFICATIONS[(notifIndex + 2) % HERO_NOTIFICATIONS.length];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <figure className={styles.photo}>
          <Image
            src="/images/salma-2.jpeg"
            alt="Salma, founder and registered dietitian"
            width={520}
            height={640}
            priority
            className={styles.photoImg}
          />
          <figcaption className={styles.caption}>
            <div className={styles.captionName}>Salma Siddiqui</div>
            <div className={styles.captionRole}>
              Founder &amp; Senior Diet Coach — every plan reviewed personally
              <br />
              <b>Based in Saudi Arabia</b>
            </div>
            <a
              href={waLink("Hi Salma, I'd like to know more about NutriSalma.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waButton}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
              </svg>
              Message on WhatsApp
            </a>
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Personalized nutrition, simplified
          </div>
          <h1 className={styles.headline}>
            Nutrition that fits <em className={styles.headlineEm}>your life.</em>
          </h1>
          <p className={styles.lede}>
            Get a personalized nutrition plan built around your goals, preferences,
            lifestyle, and everyday routine — with expert guidance every step of the way.
          </p>
          <div className={styles.ctas}>
            <Link href="/onboarding" className={styles.primaryCta}>
              Get My Personalized Plan <span className={styles.arrow}>→</span>
            </Link>
            <Link href="/app/appointments" className={styles.secondaryCta}>
              Book a Consultation
            </Link>
          </div>
          <div className={styles.trust}>
            <span className={styles.trustItem}><span className={styles.trustCheck}>✓</span> Personalized Plans</span>
            <span className={styles.trustItem}><span className={styles.trustCheck}>✓</span> Expert Guidance</span>
            <span className={styles.trustItem}><span className={styles.trustCheck}>✓</span> Progress Tracking</span>
          </div>
        </div>

        <div className={styles.dashWrap}>
          <div className={styles.dashGlow} aria-hidden="true" />
          <div className={styles.dash}>
            <div className={styles.dashHead}>
              <div>
                <div className={styles.dashKicker}>Today&rsquo;s Progress</div>
                <div className={styles.dashDate}>Monday, 17 August</div>
              </div>
              <div className={styles.dashUser}>
                <span className={styles.dashAvatar}>S</span>
                Sarah
              </div>
            </div>

            <div className={styles.ringRow}>
              <div className={styles.ringWrap}>
                <svg width="118" height="118" viewBox="0 0 118 118" className={styles.ringSvg}>
                  <circle cx="59" cy="59" r="50" fill="none" stroke="#F2E2E7" strokeWidth="11" />
                  <circle
                    cx="59"
                    cy="59"
                    r="50"
                    fill="none"
                    stroke="#A8465F"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    style={{ strokeDashoffset: dashOffset, transition: "stroke-dashoffset .3s linear" }}
                  />
                </svg>
                <div className={styles.ringLabel}>
                  <div>
                    <div className={styles.ringKcal}>{kcal.toLocaleString()}</div>
                    <div className={styles.ringGoal}>of 1,900 kcal</div>
                  </div>
                </div>
              </div>
              <div className={styles.bars}>
                <div>
                  <div className={styles.barRow}><span className={styles.barLabel}>Protein</span><span className={styles.barValue}>92g / 120g</span></div>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "77%", background: "#A8465F" }} /></div>
                </div>
                <div>
                  <div className={styles.barRow}><span className={styles.barLabel}>Water</span><span className={styles.barValue}>1.8L / 2.5L</span></div>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "72%", background: "#4E8FA8" }} /></div>
                </div>
                <div>
                  <div className={styles.barRow}><span className={styles.barLabel}>Steps</span><span className={styles.barValue}>7,842</span></div>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "78%", background: "#C1793F" }} /></div>
                </div>
              </div>
            </div>

            <div className={styles.mealsHead}>
              <div className={styles.dashKicker}>Today&rsquo;s Meals</div>
              <span className={styles.mealsPlanned}>1,460 kcal planned</span>
            </div>
            <div className={styles.mealsList}>
              {HERO_MEALS.map((m) => (
                <div key={m.slot} className={styles.mealRow}>
                  <Image src={m.image} alt={m.name} width={74} height={74} className={styles.mealImg} />
                  <div className={styles.mealInfo}>
                    <div className={styles.mealSlot}>{m.slotName}</div>
                    <div className={styles.mealName}>{m.name}</div>
                  </div>
                  <div className={styles.mealKcal}>{m.kcal} kcal</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.notif} ${styles.notifA}`}>
            <div className={`${styles.notifCard} ${notifIndex % 2 === 0 ? styles.notifVisible : styles.notifHidden}`}>
              <span className={styles.notifIcon}>{notifA.icon}</span>
              <span>{notifA.text}</span>
            </div>
          </div>
          <div className={`${styles.notif} ${styles.notifB}`}>
            <div className={`${styles.notifCardDark} ${notifIndex % 2 === 1 ? styles.notifVisible : styles.notifHidden}`}>
              <span className={styles.notifIcon}>{notifB.icon}</span>
              <span>{notifB.text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
