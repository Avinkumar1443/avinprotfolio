"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="about-section relative overflow-hidden">
      <div className="about-grid">

        {/* ===== Left Column — Profile Image ===== */}
        <AnimateOnScroll delay={0.1}>
          <div className="about-media">
            {/* Thin green accent line + corner mark */}
            <span className="about-accent-line" aria-hidden="true" />
            <span className="about-accent-corner" aria-hidden="true" />

            <div className="about-photo">
              <Image
                src="/Image/profile.png"
                alt="Avinkumar Subburam — Software Developer"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 250px, 260px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* ===== Right Column — Content ===== */}
        <div className="about-content">

          {/* Eyebrow */}
          <AnimateOnScroll delay={0.05}>
            <span className="text-eyebrow block" style={{ marginBottom: "16px" }}>
              {about.eyebrow}
            </span>
          </AnimateOnScroll>

          {/* Heading */}
          <AnimateOnScroll delay={0.1}>
            <h2 className="about-heading">
              {about.heading.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          {/* Paragraphs */}
          <AnimateOnScroll delay={0.15}>
            <div className="about-copy">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Capabilities — inline editorial row */}
          <AnimateOnScroll delay={0.2}>
            <div className="about-capabilities">
              <p className="about-label">{about.capabilitiesLabel}</p>
              <p className="about-capability-list">
                {about.capabilities.map((item, i) => (
                  <span key={item} className="about-capability">
                    {item}
                    {i < about.capabilities.length - 1 && (
                      <span className="about-dot" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Quick facts — label / value rows */}
          <AnimateOnScroll delay={0.25}>
            <dl className="about-facts">
              {about.facts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <dt className="about-label">{fact.label}</dt>
                  <dd className="about-fact-value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>

          {/* Subtle text CTA */}
          <AnimateOnScroll delay={0.3}>
            <p className="about-cta">
              <span>{about.cta.lead}</span>
              <a href={about.cta.href} className="about-cta-link group">
                {about.cta.label}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
