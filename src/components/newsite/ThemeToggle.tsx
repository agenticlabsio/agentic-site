"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Dark-first: the absence of an explicit data-theme means dark.
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    setDark(isDark);

    const handler = () => {
      setDark(document.documentElement.getAttribute("data-theme") !== "light");
    };
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);

  function handleClick() {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const next = !isDark;

    if (next) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }

    setDark(next);
    window.dispatchEvent(new Event("theme-change"));
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle theme"
      style={{
        background: "var(--card-blue-bg)",
        border: "1px solid var(--card-blue-border)",
        borderRadius: 8,
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexShrink: 0,
        padding: 0,
      }}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
