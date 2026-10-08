"use client";

import Image from "next/image";
import { coreSkillsRow1, coreSkillsRow2, CoreSkill } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";

export default function TechStack() {

  const SkillPill = ({ skill }: { skill: CoreSkill }) => {
    return (
      <div 
        className="shrink-0 flex items-center gap-3 bg-white border border-[#E4E7EC] rounded-[14px] mx-3 transition-all duration-300 group cursor-default hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md hover:-translate-y-0.5" 
        style={{ padding: '12px 18px' }}
      >
        <div className="w-6 h-6 relative shrink-0 transition-transform duration-300 group-hover:scale-[1.05]">
          {skill.icon ? (
            <Image 
              src={`/icons/skills/${skill.icon}`}
              alt={`${skill.name} logo`}
              fill
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-full" />
          )}
        </div>
        <span className="text-base font-semibold text-gray-800 whitespace-nowrap">{skill.name}</span>
      </div>
    );
  };

  const MarqueeRow = ({ items, direction }: { items: CoreSkill[], direction: "left" | "right" }) => {
    // Duplicate the items array to create a seamless loop
    const duplicatedItems = [...items, ...items];
    const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
    
    return (
      <div className="flex w-max pause-on-hover mb-6">
        <div className={`flex ${animationClass}`}>
          {duplicatedItems.map((item, index) => (
            <SkillPill key={`${item.name}-${index}`} skill={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="technologies" className="section-spacing overflow-hidden">
      <div className="container-main mb-12">
        <SectionHeader
          eyebrow="02 / CORE TECHNOLOGIES"
          heading="Technologies I Work With"
        />
      </div>

      <AnimateOnScroll delay={0.1}>
        <div className="relative w-full overflow-hidden flex flex-col items-center">
          <MarqueeRow items={coreSkillsRow1} direction="left" />
          <MarqueeRow items={coreSkillsRow2} direction="right" />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
