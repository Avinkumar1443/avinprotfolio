"use client";

import { techStack } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Wrench,
  BookOpen,
} from "lucide-react";

const categoryIcons = [Code2, MonitorSmartphone, Server, Database, Wrench, BookOpen];

export default function TechStack() {
  return (
    <section id="technologies" className="section-spacing">
      <div className="container-main">
        <SectionHeader
          eyebrow="02 / Technologies"
          heading="Technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => {
            const Icon = categoryIcons[index] || Code2;
            return (
              <AnimateOnScroll key={category.name} delay={index * 0.08}>
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        color: "var(--color-accent)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--color-accent-soft)";
                          e.currentTarget.style.color = "var(--color-accent)";
                          e.currentTarget.style.borderColor =
                            "var(--color-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--color-surface-secondary)";
                          e.currentTarget.style.color =
                            "var(--color-text-secondary)";
                          e.currentTarget.style.borderColor =
                            "var(--color-border)";
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
