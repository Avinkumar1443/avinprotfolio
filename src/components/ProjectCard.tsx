"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import AnimateOnScroll from "./AnimateOnScroll";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export default function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <article className={`project-row ${reversed ? "project-row--reversed" : ""}`}>

      {/* ===== Image ===== */}
      <AnimateOnScroll className="project-media-wrap">
        <div className="project-media">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <ProjectImagePlaceholder project={project} />
          )}

          <span className="project-badge">
            <ShieldCheck size={13} aria-hidden="true" />
            {project.badge}
          </span>
        </div>
      </AnimateOnScroll>

      {/* ===== Content ===== */}
      <AnimateOnScroll delay={0.1} className="project-content">
        <p className="project-eyebrow">
          P / {project.number}
          {project.role && <span className="project-eyebrow-role">{project.role}</span>}
        </p>

        <h3 className="project-title">{project.title}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}

        <p className="project-summary">{project.summary}</p>

        {/* Numbered key points */}
        <ol className="project-points">
          {project.points.map((point, i) => (
            <li key={point}>
              <span className="project-point-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{point}</span>
            </li>
          ))}
        </ol>

        {/* Stack */}
        <div className="project-meta">
          <span className="project-meta-label">Stack</span>
          <ul className="project-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="project-meta">
          <span className="project-meta-label">Skills</span>
          <p className="project-skills">
            {project.skills.map((skill, i) => (
              <span key={skill}>
                {skill}
                {i < project.skills.length - 1 && (
                  <span className="project-skill-sep" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </AnimateOnScroll>
    </article>
  );
}
