import { HeroSection } from "@/components/HeroSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PersonalBento } from "@/components/PersonalBento";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-y-16 pb-24">
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <PersonalBento />
    </main>
  );
}
