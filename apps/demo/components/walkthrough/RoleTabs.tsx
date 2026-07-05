"use client";

import { useRef, useState } from "react";
import type { TeamRole } from "@/data/demos";

const severityStyles: Record<string, string> = {
  high: "bg-[#f7ecec] text-[#c24141]",
  medium: "bg-[#f5efe2] text-[#a97e2c]",
  low: "bg-[#efefe9] text-secondary",
};

export default function RoleTabs({ roles }: { roles: TeamRole[] }) {
  const [activeKey, setActiveKey] = useState(roles[0].key);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const role = roles.find((r) => r.key === activeKey) ?? roles[0];

  const activateTab = (index: number) => {
    const next = roles[(index + roles.length) % roles.length];
    setActiveKey(next.key);
    tabRefs.current.get(next.key)?.focus();
  };

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        activateTab(index + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        activateTab(index - 1);
        break;
      case "Home":
        e.preventDefault();
        activateTab(0);
        break;
      case "End":
        e.preventDefault();
        activateTab(roles.length - 1);
        break;
    }
  };

  return (
    <div>
      {/* Role switcher */}
      <div
        role="tablist"
        aria-label="Team roles"
        className="flex flex-wrap gap-2 border-b border-hairline pb-6"
      >
        {roles.map((r, i) => {
          const active = r.key === activeKey;
          return (
            <button
              key={r.key}
              ref={(el) => {
                if (el) tabRefs.current.set(r.key, el);
                else tabRefs.current.delete(r.key);
              }}
              id={`role-tab-${r.key}`}
              role="tab"
              aria-selected={active}
              aria-controls={`role-panel-${r.key}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveKey(r.key)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className={`rounded-md border px-4 py-2.5 text-left transition-colors ${
                active
                  ? "border-accent bg-accent-wash"
                  : "border-hairline bg-elevated hover:border-[color:var(--accent-border)]"
              }`}
            >
              <span
                className={`block text-sm font-semibold ${active ? "text-accent-dark" : "text-ink"}`}
              >
                {r.label}
              </span>
              <span className="block text-xs text-muted-fg">{r.sub}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`role-panel-${role.key}`}
        aria-labelledby={`role-tab-${role.key}`}
        tabIndex={0}
      >
        {/* Handled stats */}
        <div className="mt-8">
          <div className="eyebrow mb-4">{role.handledTitle}</div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-[color:var(--hairline)] lg:grid-cols-4">
            {role.handled.map((s) => (
              <div key={s.label} className="bg-elevated p-5">
                <div className="figures font-display text-2xl font-semibold text-ink">
                  {s.value}
                </div>
                <div className="mt-0.5 text-sm text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
          <figure className="mt-4">
            <blockquote className="font-display text-lg text-ink-soft">
              {role.timeNote}
            </blockquote>
            <figcaption className="eyebrow-muted mt-2">{role.label}</figcaption>
          </figure>
        </div>

        {/* Queue */}
        <div className="mt-10">
          <div className="eyebrow mb-4 flex items-baseline gap-2">
            {role.queueTitle}
            <span className="figures font-mono text-muted-fg">
              · {role.queue.length} items
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {role.queue.map((item) => (
              <li key={item.id} className="dossier-card p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="figures font-mono text-xs text-muted-fg">
                    {item.id}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider ${severityStyles[item.severity]}`}
                  >
                    {item.severity}
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {item.type}
                  </span>
                  <span className="text-sm text-secondary">{item.party}</span>
                  <span className="figures ml-auto font-mono text-sm text-ink">
                    {item.amount}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
