"use client"

import { motion } from "framer-motion"

export function About() {
  const principles = [
    {
      title: "Problem-Driven Development",
      description:
        "Building tools that address concrete daily challenges—from transparent produce traceability to public transit visibility.",
    },
    {
      title: "Clean & Maintainable Architecture",
      description:
        "Writing readable, modular code with clear component boundaries, predictable state, and minimal extraneous dependencies.",
    },
    {
      title: "Continuous Exploration",
      description:
        "Actively expanding skills across modern frontend frameworks, backend API architectures, databases, and open source collaboration.",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 border-b border-[#E5DFD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary font-mono mb-4">
          <span>01</span>
          <span className="w-8 h-px bg-primary/40" />
          <span>About</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight mb-6">
              Engineering with intention and <span className="italic text-primary">clarity</span>.
            </h2>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-sans">
              B.Tech in Computer Science & Engineering
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg">
            <p>
              I am a Computer Science and Engineering student with an interest in building functional, responsive, and thoughtfully designed digital applications. My journey in development stems from curiosity about how complex web platforms organize data and simplify workflows for people.
            </p>

            <p>
              Rather than building purely theoretical demos, I focus my project work on solving practical coordination problems—including agricultural supply chain tracking (<span className="text-foreground font-medium">AgriSmart / FarmChain</span>), multi-role order management (<span className="text-foreground font-medium">PrintShop</span>), and real-time public transit tracking (<span className="text-foreground font-medium">BusTrack</span>).
            </p>

            <div className="pt-8 mt-8 border-t border-[#E5DFD3] space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold">
                Development Philosophy
              </h3>

              <div className="grid sm:grid-cols-1 gap-4">
                {principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-5 rounded-lg border border-[#E5DFD3] bg-card/60 hover:border-primary/40 hover:shadow-xs transition-all duration-200"
                  >
                    <h4 className="font-serif text-lg font-medium text-foreground mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {principle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
