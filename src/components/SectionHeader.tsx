import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll
      className={`mb-10 lg:mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="text-eyebrow mb-4">{eyebrow}</p>
      <h2
        className={`heading-section ${
          align === "center" ? "mx-auto" : ""
        } max-w-3xl`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`text-body mt-4 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
