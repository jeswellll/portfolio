import { heroInfo, basePath } from "@/config/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Code, User, Mail, FileText } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
        {/* Left Column: Text Content & CTAs */}
        <div className="md:col-span-2 order-2 md:order-1 flex flex-col justify-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900">
              {heroInfo.name}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
              {heroInfo.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
              {heroInfo.subHeadline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a href={heroInfo.socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all font-medium text-slate-700">
                <Code size={20} /> GitHub
              </a>
              <a href={heroInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all font-medium text-slate-700">
                <User size={20} /> LinkedIn
              </a>
              <a href={`mailto:${heroInfo.socialLinks.email}`} className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all font-medium text-slate-700">
                <Mail size={20} /> Email
              </a>
              <a href={`${basePath}${heroInfo.resumePdfPath}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-orange-600 text-white shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-orange-700 transition-all font-medium">
                <FileText size={20} /> Resume
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Framed Profile Image */}
        <div className="md:col-span-1 order-1 md:order-2 flex justify-center md:justify-end">
          <ScrollReveal delay={0.4} className="w-full max-w-sm">
            <div className="relative w-full aspect-[4/5] bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden group">
              <Image 
                src={`${basePath}/images/hero/headshot.heif`} 
                alt={`${heroInfo.name} Profile`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats Cards Section */}
      <ScrollReveal delay={0.5}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-200/60">
          <div className="bg-white border border-slate-200/60 rounded-xl p-5 text-center shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="text-3xl font-extrabold text-slate-900 group-hover:scale-105 transition-transform duration-300">2+</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mt-2">Years Tech Experience</div>
          </div>
          <div className="bg-white border border-slate-200/60 rounded-xl p-5 text-center shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="text-3xl font-extrabold text-slate-900 group-hover:scale-105 transition-transform duration-300">5+</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mt-2">Microservices Optimized</div>
          </div>
          <div className="bg-white border border-slate-200/60 rounded-xl p-5 text-center shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="text-3xl font-extrabold text-slate-900 group-hover:scale-105 transition-transform duration-300">90%</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mt-2">Workflows Automated</div>
          </div>
          <div className="bg-white border border-slate-200/60 rounded-xl p-5 text-center shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="text-3xl font-extrabold text-slate-900 group-hover:scale-105 transition-transform duration-300">30K+</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mt-2">Attendees Managed</div>
          </div>
        </div>
      </ScrollReveal>

      {/* Recruitment Status, Location & Relocation Information */}
      <ScrollReveal delay={0.6}>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 px-6 py-4 bg-orange-50/20 border border-orange-200/40 rounded-2xl max-w-4xl mx-auto text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">📍 Location:</span>
            <span className="font-medium">Champaign, IL</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">✈️ Relocation:</span>
            <span className="font-medium">Open to Relocation</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">💼 Work Authorization:</span>
            <span className="font-medium">F-1 Visa (STEM OPT Eligible)</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
