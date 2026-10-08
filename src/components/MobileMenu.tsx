"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

interface MobileMenuProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  activeSection,
  onNavClick,
  onClose,
}: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 lg:hidden"
      style={{ top: "var(--nav-height)" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mx-4 mt-2 p-6 flex flex-col gap-1"
        style={{
          backgroundColor: "var(--color-surface)",
          borderRadius: "var(--radius-card)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-hover)",
        }}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => onNavClick(e, link.href)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-xl transition-all"
            style={{
              color:
                activeSection === link.href
                  ? "var(--color-accent-ink)"
                  : "var(--color-text-secondary)",
              backgroundColor:
                activeSection === link.href
                  ? "var(--color-accent-soft)"
                  : "transparent",
            }}
          >
            {activeSection === link.href && (
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent-ink)" }}
              />
            )}
            {link.label}
          </motion.a>
        ))}

        {/* Resume Button */}
        <div
          className="mt-3 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <a
            href="/resume/AvinkumarSubburamResume_20260710.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center"
          >
            Download Resume
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.nav>
    </motion.div>
  );
}
