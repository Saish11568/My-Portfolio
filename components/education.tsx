"use client"

import { GraduationCap } from "lucide-react"

export function Education() {
  const educationItems = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Undergraduate Engineering Program",
      status: "In Progress / Active Student",
      description:
        "Rigorous foundational coursework in core computer science, focusing on algorithmic problem-solving, operating systems, database management systems, and modern web application development.",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming & Systems",
        "Web Technologies & Software Engineering",
      ],
    },
  ]

  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-10 border-b border-[#E5DFD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#E5DFD3]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary font-mono mb-3">
              <span>04</span>
              <span className="w-8 h-px bg-primary/40" />
              <span>Background</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground">
              Education & <span className="italic text-primary">Foundations</span>
            </h2>
          </div>

          <p className="hidden md:block max-w-xs text-xs text-muted-foreground leading-relaxed font-sans text-right">
            Verified academic trajectory in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-xl border border-[#E5DFD3] bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-primary text-xs font-mono mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-base font-medium text-primary font-sans">
                    {item.field}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans">
                    {item.institution}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E5DFD3] lg:pl-10">
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                      Core Academic Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 rounded-md bg-[#F8F6F0] text-foreground/85 border border-[#EBE5DB] hover:border-primary/40 hover:bg-[#EBF3F1] transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
