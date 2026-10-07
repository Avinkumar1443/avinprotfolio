"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import AnimateOnScroll from "./AnimateOnScroll";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export default function ProjectCard({
  project,
  reversed = false,
}: ProjectCardProps) {
  const isFlagship = project.isFlagship;

  return (
    <AnimateOnScroll>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          isFlagship ? "lg:gap-16" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className={`${reversed ? "lg:order-2" : ""} ${
            isFlagship ? "lg:col-span-1" : ""
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {/*
            Replace with actual screenshot:
            <Image src={project.image} alt={project.title} width={800} height={500} className="rounded-2xl" />
          */}
          <div className="ambient-glow rounded-[var(--radius-card)]">
            <ProjectImagePlaceholder
              projectName={project.subtitle || project.title}
              projectNumber={project.number}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reversed ? "lg:order-1" : ""}`}>
          {/* Project number */}
          <span
            className="text-eyebrow mb-4 block"
            style={{ color: "var(--color-text-muted)" }}
          >
            Project {project.number}
          </span>

          {/* Title */}
          <h3
            className={`font-semibold mb-2 ${
              isFlagship
                ? "text-3xl lg:text-4xl"
                : "heading-card"
            }`}
            style={{ color: "var(--color-text-primary)" }}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p
              className="text-lg font-medium mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              {project.subtitle}
            </p>
          )}

          {/* Role */}
          {project.role && (
            <p
              className="text-sm font-medium mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Role: {project.role}
            </p>
          )}

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-3 mb-5">
            {project.description.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-2 mb-5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metric callout */}
          {project.metric && (
            <div
              className="inline-flex items-center gap-4 px-6 py-4 mb-5"
              style={{
                backgroundColor: "var(--color-accent-soft)",
                borderRadius: "var(--radius-card)",
                border: "1px solid rgba(37, 99, 235, 0.15)",
              }}
            >
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--color-accent)" }}
              >
                {project.metric.value}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.metric.label}
              </span>
            </div>
          )}

          {/* View Details link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium mt-2 group"
            style={{ color: "var(--color-accent)" }}
            whileHover={{ x: 4 }}
            onClick={(e) => e.preventDefault()}
          >
            View Details
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
