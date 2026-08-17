"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import styles from "./ToastProvider.module.css";

const ToastContext = createContext(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = useCallback((text) => {
    clearTimeout(timerRef.current);
    setToast(text);
    timerRef.current = setTimeout(() => setToast(null), 2800);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast ? (
        <div className={styles.toast} role="status">
          <span className={styles.check}>✓</span>
          {toast}
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}
