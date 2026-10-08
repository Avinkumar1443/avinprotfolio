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

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
