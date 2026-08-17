"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./DietitianBio.module.css";

export default function DietitianBio() {
  const [visible, setVisible] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dietitian" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.photoCol}>
          <div ref={photoRef} className={`${styles.photoBox} ${visible ? styles.visible : ""}`}>
            <Image
              src="/images/salma.jpeg"
              alt="Salma, founder and registered dietitian"
              width={640}
              height={560}
              className={styles.photo}
            />
          </div>
        </div>
        <div>
          <div className={styles.kicker}>Know Your Dietitian</div>
          <h2 className={styles.name}>Salma Siddiqui</h2>
          <p className={styles.credential}>B.Sc. Nutritionist | Senior Diet Coach</p>
          <p className={styles.p}>
            Meet Salma Siddiqui, a dedicated nutrition professional passionate about
            helping people build healthier, more sustainable relationships with food.
          </p>
          <p className={styles.p}>
            With a B.Sc. in Nutrition and clinical internship experience at the Asian
            Institute of Gastroenterology, Hyderabad, Salma has developed a strong
            foundation in nutrition, dietary counselling, and patient-focused care.
          </p>
          <p className={styles.p}>
            Today, she works as a Senior Diet Coach with a leading multinational
            corporation (MNC), where she supports individuals in making practical and
            sustainable improvements to their nutrition and lifestyle.
          </p>

          <h3 className={styles.h3}>Her Approach</h3>
          <p className={styles.p}>
            Salma believes that healthy eating shouldn&rsquo;t feel restrictive or
            complicated. Her approach focuses on personalised nutrition, practical
            guidance, and sustainable habits that fit naturally into your everyday life.
          </p>
          <p className={styles.p}>
            Whether your goal is improving your eating habits, managing your weight,
            supporting a healthier lifestyle, or simply understanding what your body
            needs, her guidance is designed around you — not a one-size-fits-all diet.
          </p>

          <h3 className={styles.h3}>Why Choose Salma?</h3>
          <div className={styles.checklist}>
            <div className={styles.checkItem}><span className={styles.check}>✓</span><span>B.Sc. in Nutrition</span></div>
            <div className={styles.checkItem}><span className={styles.check}>✓</span><span>Clinical internship experience at Asian Institute of Gastroenterology, Hyderabad</span></div>
            <div className={styles.checkItem}><span className={styles.check}>✓</span><span>Currently a Senior Diet Coach at an MNC</span></div>
            <div className={styles.checkItem}><span className={styles.check}>✓</span><span>Personalised and practical nutrition guidance</span></div>
            <div className={styles.checkItem}><span className={styles.check}>✓</span><span>Focus on sustainable, everyday healthy habits</span></div>
          </div>

          <p className={styles.closing}>
            Good nutrition starts with understanding your body. Let&rsquo;s make your
            health journey simpler, smarter, and more sustainable.
          </p>
          <a
            href="https://instagram.com/nutrisalma"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
