"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Section ids in page order, with the label shown in the rail
const sections = [
  { id: "about", number: "01", label: "About" },
  { id: "technologies", number: "02", label: "Technologies" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "projects", number: "04", label: "Selected Work" },
  { id: "education", number: "05", label: "Education" },
  { id: "certifications", number: "06", label: "Certifications" },
  { id: "contact", number: "07", label: "Contact" },
];

const intro = { number: "00", label: "Introduction" };

export default function SideRail() {
  const [active, setActive] = useState(intro);
  const [progress, setProgress] = useState(0);

  // Current section: the last one whose top has passed 40% of the viewport
  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.4;
      let current = intro;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= marker) current = s;
      }
      setActive((prev) => (prev.number === current.number ? prev : current));

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside className="side-rail" aria-label="Section indicator and social links">
      {/* Section number */}
      <span key={`n-${active.number}`} className="side-rail-number">
        {active.number}
      </span>

      {/* Vertical section label */}
      <span key={`l-${active.number}`} className="side-rail-label">
        {active.label}
      </span>

      {/* Scroll progress line */}
      <span className="side-rail-track" aria-hidden="true">
        <span
          className="side-rail-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </span>

      {/* Social links */}
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="side-rail-icon"
        aria-label="LinkedIn"
      >
        <LinkedinIcon size={15} />
      </a>
      <a
        href={`mailto:${contactInfo.email}`}
        className="side-rail-icon"
        aria-label="Email"
      >
        <Mail size={15} strokeWidth={1.6} />
      </a>
    </aside>
  );
}
