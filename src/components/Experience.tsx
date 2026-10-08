"use client";

import { experiences } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        <SectionHeader
          eyebrow="03 / Experience"
          heading="Professional Experience"
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-[2px] hidden md:block"
            style={{ backgroundColor: "var(--color-border)" }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.company} delay={index * 0.15}>
                <div className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[11px] top-2 w-[18px] h-[18px] rounded-full hidden md:flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "3px solid var(--color-accent-ink)",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  </div>

                  <div className="card">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="text-lg font-medium mt-1"
                          style={{ color: "var(--color-accent-ink)" }}
                        >
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                        <span
                          className="inline-flex items-center gap-1.5 text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          color: "var(--color-accent-ink)",
                        }}
                      >
                        <Briefcase size={12} />
                        {exp.type}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[15px] leading-relaxed"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              backgroundColor: "var(--color-accent-ink)",
                              opacity: 0.6,
                            }}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
