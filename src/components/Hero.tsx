"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { hero } from "@/data/portfolio";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section relative overflow-hidden" aria-label="Introduction">
      {/* Subtle grid backdrop */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container-main relative">
        <div className="hero-layout">

          {/* ===== Left — Intro ===== */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Status */}
            <motion.p variants={fadeUp} className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              {hero.statusLabel}
            </motion.p>

            {/* Name + role */}
            <motion.h1 variants={fadeUp} className="hero-name">
              {hero.name}
              <span className="hero-role">{hero.role}</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="hero-description">
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                onClick={handleScrollToWork}
                className="btn btn-primary"
              >
                {hero.primaryCta.label}
                <ArrowDown size={16} />
              </a>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-secondary"
              >
                <Download size={16} />
                {hero.secondaryCta.label}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
