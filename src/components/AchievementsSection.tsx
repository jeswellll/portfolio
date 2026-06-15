"use client";

import { achievements, leaderships } from "@/config/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Users, Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6" id="achievements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Achievements & Honors */}
        <div>
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <Trophy className="text-orange-500" size={28} /> Honors & Recognition
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {achievements.map((ach, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-400" />
                  
                  <div className="flex gap-4 items-start">
                    <div className="text-3xl p-2 bg-orange-50 rounded-xl">
                      {ach.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900">{ach.title}</h3>
                        <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">{ach.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-500 mt-1">{ach.organization}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: Leadership & Stakeholder Management */}
        <div>
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <Users className="text-orange-500" size={28} /> Leadership & Stakeholder Management
            </h2>
          </ScrollReveal>

          <div className="space-y-8 relative pl-6 border-l-2 border-slate-200">
            {leaderships.map((leader, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className="relative">
                  {/* Node dot on the vertical line */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 bg-orange-500 z-10" />
                  
                  <div>
                    <span className="text-xs font-medium text-slate-400">{leader.dates}</span>
                    <h3 className="text-lg font-bold text-slate-950 mt-1">{leader.role}</h3>
                    <h4 className="text-sm font-semibold text-orange-600 mt-0.5">{leader.organization}</h4>
                    
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {leader.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed flex gap-2">
                          <span className="text-orange-500">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
