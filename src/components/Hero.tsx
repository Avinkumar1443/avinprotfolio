"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Code, Globe, GitBranch, Box } from "lucide-react";
import { hero } from "@/data/portfolio";
import ProfileImagePlaceholder from "./ProfileImagePlaceholder";

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
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "calc(var(--nav-height) + 64px)",
        paddingBottom: "80px",
        minHeight: "100vh",
      }}
      aria-label="Introduction"
    >
      {/* Subtle decorative background elements */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content — 7 of 12 columns */}
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.h1 variants={fadeUp} className="heading-hero mb-6">
              <span className="block">{hero.headline.greeting}</span>
              {hero.headline.roles.map((role, i) => (
                <span key={i} className="block">
                  {role.includes("Full Stack") ? (
                    <>
                      {"& "}
                      <span className="text-gradient">
                        Full Stack
                      </span>
                      {" Engineer."}
                    </>
                  ) : (
                    <span className="text-gradient">
                      {role}
                    </span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-body max-w-xl mb-8"
              style={{ fontSize: "18px" }}
            >
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
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

            {/* Tech Pills */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {hero.techPills.map((pill) => (
                <span key={pill} className="tech-pill">
                  {pill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual — 5 of 12 columns */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* The Image with Ambient Glow */}
            <div className="ambient-glow rounded-[var(--radius-card)]">
              <ProfileImagePlaceholder />
            </div>

            {/* Floating Icon 1 - Box */}
            <motion.div
              className="absolute top-12 -left-6 lg:-left-12 opacity-60"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Box size={40} style={{ color: "var(--color-text-muted)", strokeWidth: 1.5 }} />
            </motion.div>

            {/* Floating Icon 2 - Globe */}
            <motion.div
              className="absolute -bottom-8 left-10 lg:left-16 opacity-50"
              animate={{ y: [12, -12, 12] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            >
              <Globe size={48} style={{ color: "var(--color-text-muted)", strokeWidth: 1.25 }} />
            </motion.div>

            {/* Floating Icon 3 - GitBranch */}
            <motion.div
              className="absolute top-1/3 -right-6 lg:-right-14 opacity-60"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
              <GitBranch size={36} style={{ color: "var(--color-text-muted)", strokeWidth: 1.5 }} />
            </motion.div>
            
            {/* Floating Icon 4 - Code */}
            <motion.div
              className="absolute bottom-1/4 -right-4 lg:-right-8 opacity-70"
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
            >
              <Code size={32} style={{ color: "var(--color-text-muted)", strokeWidth: 1.5 }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
