"use client";

import { useState } from "react";
import type { TeamRole } from "@/data/demos";

const severityStyles: Record<string, string> = {
  high: "bg-[#f7ecec] text-[#c24141]",
  medium: "bg-[#f5efe2] text-[#a97e2c]",
  low: "bg-[#efefe9] text-secondary",
};

export default function RoleTabs({ roles }: { roles: TeamRole[] }) {
  const [activeKey, setActiveKey] = useState(roles[0].key);
  const role = roles.find((r) => r.key === activeKey) ?? roles[0];

  return (
    <div>
      {/* Role switcher */}
      <div
        role="tablist"
        aria-label="Team roles"
        className="flex flex-wrap gap-2 border-b border-hairline pb-6"
      >
        {roles.map((r) => {
          const active = r.key === activeKey;
          return (
            <button
              key={r.key}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveKey(r.key)}
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
              <span className="block text-xs text-faint">{r.sub}</span>
            </button>
          );
        })}
      </div>

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
        <p className="mt-4 font-display text-lg italic text-ink-soft">
          {role.timeNote}
        </p>
      </div>

      {/* Queue */}
      <div className="mt-10">
        <div className="eyebrow mb-4 flex items-baseline gap-2">
          {role.queueTitle}
          <span className="figures font-mono text-faint">
            · {role.queue.length} items
          </span>
        </div>
        <ul className="flex flex-col gap-3">
          {role.queue.map((item) => (
            <li key={item.id} className="dossier-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="figures font-mono text-xs text-faint">
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
  );
}
