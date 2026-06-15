"use client";

import { useState } from "react";
import { projects, basePath } from "@/config/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "AI & Analytics", "Product & Strategy", "Automation"];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="max-w-6xl mx-auto py-20 px-6" id="projects">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ScrollReveal key={project.title} delay={idx * 0.1}>
            <div className="bg-white border border-slate-200 rounded-2xl h-full flex flex-col shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-slate-300 overflow-hidden group">
              {project.imagePath && (
                <div className="relative w-full h-48 border-b border-slate-200 overflow-hidden">
                  <Image
                    src={`${basePath}${project.imagePath}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
              <p className="text-sm font-medium text-orange-600 mb-4">{project.tagline}</p>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technicalStack.map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 border border-slate-200 rounded-md px-2 py-1 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-slate-100">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors"
                  >
                    {link.label.toLowerCase().includes("github") ? <Code size={16} /> : <ExternalLink size={16} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
