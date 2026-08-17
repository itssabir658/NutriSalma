"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ALTERNATIVES, PLAN_MEALS } from "@/lib/content";
import { useToast } from "./ToastProvider";
import styles from "./PersonalizedPlan.module.css";

export default function PersonalizedPlan() {
  const [meals, setMeals] = useState(PLAN_MEALS);
  const [swapOpen, setSwapOpen] = useState(false);
  const showToast = useToast();

  const totalKcal = meals.reduce((a, m) => a + m.kcal, 0);
  const totalProtein = meals.reduce((a, m) => a + m.protein, 0);
  const eatenCount = meals.filter((m) => m.eaten).length;

  const swapMeal = useMemo(
    () => meals.find((m) => m.id === swapOpen) || null,
    [meals, swapOpen]
  );

  const toggleEaten = (id) => {
    setMeals((prev) => {
      const next = prev.map((m) => (m.id === id ? { ...m, eaten: !m.eaten } : m));
      const meal = next.find((m) => m.id === id);
      showToast(meal.eaten ? `${meal.slot} logged — plan updated` : `${meal.slot} un-logged`);
      return next;
    });
  };

  const chooseAlternative = (alt) => {
    setMeals((prev) =>
      prev.map((m) =>
        m.id === swapOpen
          ? { ...m, name: alt.name, kcal: alt.kcal, protein: alt.protein, eaten: false, image: alt.image }
          : m
      )
    );
    setSwapOpen(false);
    showToast(`${alt.name} swapped in`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.aside}>
          <div className={styles.kicker}>The personalized experience</div>
          <h2 className={styles.title}>A nutrition plan built around you.</h2>
          <p className={styles.sub}>
            Every meal is chosen for your goals, your schedule, and the food you
            actually like. Not enough protein today? Swap a meal in two taps — your
            plan rebalances instantly.
          </p>
          <div className={styles.suggestion}>
            <div className={styles.suggestionKicker}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E9A8BC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Smart suggestion
            </div>
            <p className={styles.suggestionBody}>
              You&rsquo;re short on protein today. We&rsquo;ve suggested a higher-protein
              alternative for dinner.
            </p>
            <button type="button" className={styles.suggestionBtn} onClick={() => setSwapOpen("d")}>
              View Alternative
            </button>
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planHead}>
            <div>
              <div className={styles.planKicker}>Today&rsquo;s Plan</div>
              <div className={styles.planTotals}>{totalKcal.toLocaleString()} kcal · {totalProtein}g protein</div>
            </div>
            <div className={styles.planEaten}>{eatenCount} of 3 logged</div>
          </div>
          <div className={styles.mealList}>
            {meals.map((m) => (
              <div key={m.id} className={styles.mealRow}>
                <Image src={m.image} alt={m.name} width={74} height={74} className={styles.mealImg} />
                <div>
                  <div className={styles.mealTags}>
                    <span className={styles.mealSlot}>{m.slot}</span>
                    {m.eaten ? <span className={styles.eatenBadge}>✓ Eaten</span> : null}
                  </div>
                  <div className={styles.mealName}>{m.name}</div>
                  <div className={styles.mealMacros}>
                    <span>{m.kcal} kcal</span>
                    <span>{m.protein}g protein</span>
                  </div>
                  <div className={styles.mealActions}>
                    <button
                      type="button"
                      className={m.eaten ? styles.eatenBtnDone : styles.eatenBtn}
                      onClick={() => toggleEaten(m.id)}
                    >
                      {m.eaten ? "✓ Eaten" : "✓ Mark as eaten"}
                    </button>
                    <button type="button" className={styles.swapBtn} onClick={() => setSwapOpen(m.id)}>
                      Swap meal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {swapOpen ? (
        <div className={styles.modalOverlay} onClick={() => setSwapOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <div className={styles.modalHeadRow}>
                <div>
                  <div className={styles.modalKicker}>SWAP MEAL</div>
                  <h3 className={styles.modalTitle}>
                    Three alternatives for {swapMeal ? swapMeal.slot : "Dinner"}
                  </h3>
                </div>
                <button type="button" aria-label="Close" className={styles.modalClose} onClick={() => setSwapOpen(false)}>
                  ✕
                </button>
              </div>
              <div className={styles.original}>
                <span className={styles.originalKicker}>ORIGINAL</span>
                <span>{swapMeal ? `${swapMeal.name} — ${swapMeal.kcal} kcal` : "Grilled Salmon Bowl — 490 kcal"}</span>
              </div>
            </div>
            <div className={styles.altList}>
              {ALTERNATIVES.map((alt) => (
                <div key={alt.name} className={styles.altRow}>
                  <Image src={alt.image} alt={alt.name} width={74} height={74} className={styles.altImg} />
                  <div>
                    <div className={styles.altName}>{alt.name}</div>
                    <div className={styles.altMacros}>
                      <span>{alt.kcal} kcal</span>
                      <span>P {alt.protein}g&nbsp;&nbsp;·&nbsp;&nbsp;C {alt.carbs}g&nbsp;&nbsp;·&nbsp;&nbsp;F {alt.fat}g</span>
                    </div>
                    <div className={styles.altNote}>{alt.note}</div>
                  </div>
                  <button type="button" className={styles.altChoose} onClick={() => chooseAlternative(alt)}>
                    Choose this meal
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
