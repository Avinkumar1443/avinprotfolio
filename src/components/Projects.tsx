"use client";

import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-main">
        <SectionHeader
          eyebrow="04 / Selected Work"
          heading="Selected Projects"
        />

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.number}
              style={
                project.isFlagship
                  ? {
                      padding: "40px",
                      backgroundColor: "var(--color-surface)",
                      borderRadius: "var(--radius-card)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-card)",
                    }
                  : undefined
              }
            >
              <ProjectCard
                project={project}
                reversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
