"use client";

import { certifications } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-spacing">
      <div className="container-main">
        <SectionHeader
          eyebrow="06 / Certifications"
          heading="Professional Certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimateOnScroll key={cert.title} delay={index * 0.1}>
              <div
                className="card h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: cert.isFlagship
                    ? "var(--shadow-card)"
                    : undefined,
                  borderColor: cert.isFlagship
                    ? "var(--color-accent)"
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = cert.isFlagship
                    ? "var(--shadow-card)"
                    : "";
                }}
              >
                {/* Flagship accent bar */}
                {cert.isFlagship && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
                    }}
                  />
                )}

                {/* Issuer badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: cert.isFlagship
                        ? "var(--color-accent-soft)"
                        : "var(--color-surface-secondary)",
                      color: cert.isFlagship
                        ? "var(--color-accent)"
                        : "var(--color-text-muted)",
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: cert.isFlagship
                        ? "var(--color-accent)"
                        : "var(--color-text-muted)",
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {cert.title}
                </h3>

                {/* Description */}
                {cert.description && (
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {cert.description}
                  </p>
                )}

                {/* Date */}
                {cert.date && (
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {cert.date}
                  </p>
                )}

                {/* Credential IDs */}
                <div className="space-y-1.5 mb-4">
                  {cert.credentialId && (
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <span className="font-medium">Credential ID:</span>{" "}
                      <span className="font-mono">{cert.credentialId}</span>
                    </p>
                  )}
                  {cert.certificationNo && (
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <span className="font-medium">Certification No:</span>{" "}
                      <span className="font-mono">{cert.certificationNo}</span>
                    </p>
                  )}
                  {cert.registrationNo && (
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <span className="font-medium">Registration No:</span>{" "}
                      <span className="font-mono">{cert.registrationNo}</span>
                    </p>
                  )}
                </div>

                {/* Tools */}
                {cert.tools && cert.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
