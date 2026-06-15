"use client";

import React from "react";
import { experiences, educations, Experience, Education } from "@/config/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

type TimelineItem =
  | (Experience & { type: 'experience' })
  | (Education & { type: 'education' });

export function TimelineSection() {
  const items: TimelineItem[] = [
    ...experiences.map(e => ({ ...e, type: 'experience' as const })),
    ...educations.map(e => ({ ...e, type: 'education' as const }))
  ];

  const parsedItems = items.map(item => {
    const end = item.endDate === "Present" ? "2026-06" : item.endDate;
    return { ...item, parsedEnd: end };
  });

  // 1. Gather all unique dates to form topological grid lines
  const datesSet = new Set<string>();
  parsedItems.forEach(item => {
    datesSet.add(item.parsedEnd);
    datesSet.add(item.startDate);
  });
  
  // Sort descending (newest to oldest)
  const uniqueDates = Array.from(datesSet).sort((a, b) => b.localeCompare(a));

  const sortedItems = [...parsedItems].sort((a, b) => {
    if (b.parsedEnd === a.parsedEnd) {
      return a.type === 'experience' ? -1 : 1;
    }
    return b.parsedEnd.localeCompare(a.parsedEnd);
  });

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6" id="timeline">
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">Experience & Education</h2>
      </ScrollReveal>
      
      {/* Mobile View: Standard Stack */}
      <div className="md:hidden relative space-y-12">
        <div className="absolute left-[15px] w-[2px] h-full bg-slate-200" />
        {sortedItems.map((item, idx) => {
          const isEdu = item.type === 'education';
          return (
            <ScrollReveal key={idx} delay={0.1} className="relative z-10 w-full flex">
              <div className={`absolute left-[0px] flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-50 text-white shadow-sm top-5 z-20 ${isEdu ? 'bg-blue-600' : 'bg-orange-600'}`}>
                {isEdu ? <GraduationCap size={14} /> : <Briefcase size={14} />}
              </div>
              <div className="w-full ml-[40px]">
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group">
                  {(item as any).imagePath && (
                    <div className="relative w-full h-32 border-b border-slate-200 overflow-hidden">
                      <Image
                        src={(item as any).imagePath}
                        alt={isEdu ? (item as Education).institution : (item as Experience).company}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {isEdu ? (item as Education).degree : (item as Experience).role}
                    </h3>
                    <span className={`text-sm font-medium whitespace-nowrap mt-1 ${isEdu ? 'text-blue-600' : 'text-orange-600'}`}>
                      {item.dates}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-slate-700 mb-4">
                    {isEdu ? (item as Education).institution : (item as Experience).company}
                  </h4>
                  {item.bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Desktop View: Topological Grid */}
      {/* 
        This grid maps strictly to topological intervals, 
        naturally compressing long empty durations while preventing any physical card overlap.
      */}
      <div className="hidden md:grid relative w-full mt-12" style={{
        gridTemplateColumns: '1fr 40px 1fr',
        gridTemplateRows: `repeat(${uniqueDates.length - 1}, minmax(80px, auto))`
      }}>
        {/* Central Track Base */}
        <div className="col-start-2 col-end-3 row-start-1 h-full w-[2px] bg-slate-200 mx-auto" style={{ gridRowEnd: uniqueDates.length }} />

        {parsedItems.map((item, idx) => {
          const isEdu = item.type === 'education';
          
          // Grid lines are 1-indexed. Index 0 in array = Grid Line 1.
          const rowStart = uniqueDates.indexOf(item.parsedEnd) + 1;
          const rowEnd = uniqueDates.indexOf(item.startDate) + 1;

          return (
            <React.Fragment key={idx}>
              {/* Duration Highlight on Track */}
              <div 
                className={`w-[4px] rounded-full z-10 transition-all ${isEdu ? 'bg-blue-400 translate-x-[2px]' : 'bg-orange-400 -translate-x-[6px]'}`}
                style={{
                  gridColumn: '2 / 3',
                  gridRowStart: rowStart,
                  gridRowEnd: rowEnd,
                  justifySelf: 'center',
                  marginTop: '32px', // Start from middle of the dot
                  marginBottom: '16px',
                }}
              />

              {/* Marker Dot */}
              <div 
                className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-50 text-white shadow-sm z-30 ${isEdu ? 'bg-blue-600' : 'bg-orange-600'}`}
                style={{ 
                  gridColumn: '2 / 3',
                  gridRowStart: rowStart,
                  justifySelf: 'center',
                  alignSelf: 'start',
                  marginTop: '16px' // Align dot visually with card header
                }}
              >
                  {isEdu ? <GraduationCap size={14} /> : <Briefcase size={14} />}
              </div>

              {/* Content Card */}
              <div 
                className={`w-full z-20 px-6 py-4 ${isEdu ? 'col-start-3' : 'col-start-1'}`}
                style={{ 
                  gridRowStart: rowStart,
                  gridRowEnd: rowEnd,
                  alignSelf: 'start' // Prevent card from stretching vertically across intervals
                }}
              >
                <ScrollReveal delay={0.1} className="w-full">
                  <div className="w-full bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all rounded-xl flex flex-col relative overflow-hidden group">
                    {(item as any).imagePath && (
                      <div className="relative w-full h-40 border-b border-slate-200 overflow-hidden">
                        <Image
                          src={(item as any).imagePath}
                          alt={isEdu ? (item as Education).institution : (item as Experience).company}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {isEdu ? (item as Education).degree : (item as Experience).role}
                      </h3>
                      <span className={`text-sm font-medium whitespace-nowrap mt-1 ${isEdu ? 'text-blue-600' : 'text-orange-600'}`}>
                        {item.dates}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-700 mb-4">
                      {isEdu ? (item as Education).institution : (item as Experience).company}
                    </h4>
                    {item.bullets.length > 0 && (
                      <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
