"use client";

import { education } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        <SectionHeader eyebrow="05 / Education" heading="Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <AnimateOnScroll key={edu.institution} delay={index * 0.1}>
              <div className="card h-full relative overflow-hidden">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent-ink) 0%, var(--color-accent) 100%)",
                    opacity: 0.6,
                  }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent-ink)",
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: "var(--color-accent-ink)" }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
