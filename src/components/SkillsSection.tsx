import { skills } from "@/config/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6" id="skills">
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Skills & Technologies</h2>
      </ScrollReveal>
      <div className="space-y-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <ScrollReveal key={category} delay={idx * 0.1}>
            <h3 className="text-lg font-semibold mb-4 text-slate-800">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 border border-slate-200 rounded-md px-2 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
