/**
 * ProjectImagePlaceholder
 *
 * Shown until a real screenshot is added. To use a screenshot, put it in
 * /public/Image/projects/ and set `image` for the project in src/data/portfolio.ts.
 */
import type { Project } from "@/data/portfolio";

export default function ProjectImagePlaceholder({ project }: { project: Project }) {
  return (
    <div className="project-placeholder" aria-hidden="true">
      {/* Stylized app window */}
      <div className="project-placeholder-window">
        <div className="project-placeholder-bar">
          <i /><i /><i />
        </div>
        <div className="project-placeholder-body">
          <div className="project-placeholder-side">
            <span /><span /><span /><span />
          </div>
          <div className="project-placeholder-main">
            <span className="project-placeholder-title">{project.title}</span>
            <div className="project-placeholder-cards">
              <span /><span /><span />
            </div>
            <div className="project-placeholder-lines">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      <span className="project-placeholder-number">{project.number}</span>
    </div>
  );
}
