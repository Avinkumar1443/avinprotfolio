"use client";

import { Building2, Layers, ShieldCheck } from "lucide-react";
import { about } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";

const iconMap = {
  Building2,
  Layers,
  ShieldCheck,
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        <SectionHeader eyebrow={about.eyebrow} heading={about.heading} />

        {/* Content paragraphs */}
        <AnimateOnScroll delay={0.1}>
          <div className="max-w-3xl space-y-5 mb-16">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-body">
                {p}
              </p>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <AnimateOnScroll key={card.title} delay={index * 0.1}>
                <div
                  className="card relative overflow-hidden group"
                  style={{ paddingTop: "36px" }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      opacity: 0.7,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {card.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
