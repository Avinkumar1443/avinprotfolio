/**
 * ProjectImagePlaceholder
 *
 * Replace with actual project screenshots.
 * Expected paths:
 *   /public/images/projects/smile.png
 *   /public/images/projects/crm.png
 *   /public/images/projects/cms.png
 *   /public/images/projects/cara.png
 *
 * Usage after replacement:
 * <Image
 *   src={imagePath}
 *   alt={projectTitle}
 *   width={800}
 *   height={500}
 *   className="rounded-lg object-cover"
 * />
 */

interface ProjectImagePlaceholderProps {
  projectName: string;
  projectNumber: string;
}

export default function ProjectImagePlaceholder({
  projectName,
  projectNumber,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className="relative w-full overflow-hidden group"
      style={{
        aspectRatio: "16 / 10",
        borderRadius: "var(--radius-card)",
        background:
          "linear-gradient(145deg, var(--color-surface-secondary) 0%, var(--color-accent-soft) 100%)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Browser window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div
          className="flex-1 h-6 mx-8 rounded-md flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-surface-secondary)",
            border: "1px solid var(--color-border)",
          }}
        >
          <span
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {projectName.toLowerCase().replace(/\s+/g, "-")}.app
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="absolute inset-0 mt-10 flex flex-col items-center justify-center gap-3">
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={`project-grid-${projectNumber}`}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="var(--color-accent)" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#project-grid-${projectNumber})`}
          />
        </svg>

        <div
          className="text-5xl font-bold opacity-[0.06]"
          style={{ color: "var(--color-accent)" }}
        >
          {projectNumber}
        </div>
        <span
          className="text-sm font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          {projectName}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            color: "var(--color-text-muted)",
            backgroundColor: "rgba(37, 99, 235, 0.06)",
          }}
        >
          Screenshot Placeholder
        </span>
      </div>
    </div>
  );
}
