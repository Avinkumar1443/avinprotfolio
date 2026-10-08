"use client";

import { contactInfo } from "@/data/portfolio";
import { Mail, ArrowUp } from "lucide-react";

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-page)",
      }}
    >
      <div className="container-main">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          {/* Left */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight inline-block mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              AVIN<span style={{ color: "var(--color-accent-ink)" }}>.</span>
            </a>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Software Developer / Full Stack Engineer
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                backgroundColor: "var(--color-surface-secondary)",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-soft)";
                e.currentTarget.style.color = "var(--color-accent-ink)";
                e.currentTarget.style.borderColor = "var(--color-accent-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-surface-secondary)";
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                backgroundColor: "var(--color-surface-secondary)",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-soft)";
                e.currentTarget.style.color = "var(--color-accent-ink)";
                e.currentTarget.style.borderColor = "var(--color-accent-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-surface-secondary)";
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer"
              style={{
                backgroundColor: "var(--color-surface-secondary)",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-soft)";
                e.currentTarget.style.color = "var(--color-accent-ink)";
                e.currentTarget.style.borderColor = "var(--color-accent-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-surface-secondary)";
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Designed & Developed by Avinkumar Subburam
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; 2026 Avinkumar Subburam
          </p>
        </div>
      </div>
    </footer>
  );
}
