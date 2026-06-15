"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const bentoItems = [
  {
    id: 1,
    src: "/images/personal/doha skyline.jpg",
    alt: "📍Doha, Qatar",
    title: "📍Doha, Qatar",
    description: "A place close to my heart. This is where I grew up and built myself.",
    className: "md:col-span-2 md:row-span-1 aspect-video md:aspect-auto", // Wide block
  },
  {
    id: 2,
    src: "/images/personal/IMG-20240330-WA0014.jpg",
    alt: "Loki",
    title: "Loki, Dog of Mischief",
    description: "They say a dog is man's best friend. He sure is mine.",
    className: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto", // Portrait block
  },
  {
    id: 3,
    src: "/images/personal/IMG20221209210739.jpg",
    alt: "Football, the beautiful game",
    title: "Football, the beautiful game",
    description: "Whether it is watching or playing, this sport has been with me since day 1. Glad I could watch the games live in the 2022 world cup.",
    className: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto", // Portrait block
  },
  {
    id: 4,
    src: "/images/personal/Screenshot_2026-06-12-13-39-56-22_1c337646f29875672b5a61192b9010f9.jpg",
    alt: "Crafts",
    title: "Crafts",
    description: "I have never been the best at it. But that has never stopped me. I always try to find new ways to jog my creative side, as I believe that it drives innovation.",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto", // Small block
  },
  {
    id: 5,
    src: "/images/personal/Screenshot_2026-06-12-13-41-54-27_1c337646f29875672b5a61192b9010f9.jpg",
    alt: "Travel & Exploration",
    title: "Travel & Exploration",
    description: "Blessed to have been able to experience 25+ countries in my lifetime. I enjoy learning new things this world has to offer, and prefer experiencing it first hand. To many more.",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto", // Small block
  },
];

export function PersonalBento() {
  return (
    <section className="w-full max-w-[1400px] mx-auto py-20 px-6" id="personal">
      <ScrollReveal>
        <div className="mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Off-Duty</h2>
          <p className="text-slate-600 mt-2">A glimpse into what I do when I'm not coding.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] max-w-[1400px] mx-auto">
        {bentoItems.map((item, idx) => (
          <ScrollReveal
            key={item.id}
            delay={idx * 0.1}
            className={`relative w-full h-full bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden group ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              unoptimized
            />
            {/* Hover overlay with high-contrast text */}
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 z-10 pointer-events-none">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
