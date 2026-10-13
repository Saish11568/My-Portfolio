"use client"

import { Code2, Layout, Server, Database, Wrench } from "lucide-react"

interface SkillCategory {
  title: string
  icon: typeof Code2
  description: string
  skills: { name: string; context?: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core languages used across backend systems, web logic, and scripts.",
    skills: [
      { name: "Python", context: "Automation, scripts & algorithms" },
      { name: "JavaScript (ES6+)", context: "Full-stack application logic" },
      { name: "TypeScript", context: "Type-safe frontend development" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Modern web standards, component systems, and responsive layouts.",
    skills: [
      { name: "React", context: "Component architectures & hooks" },
      { name: "Next.js", context: "App Router & SSR/SSG workflows" },
      { name: "HTML5 & CSS3", context: "Semantic DOM & accessibility" },
      { name: "Tailwind CSS", context: "Custom design systems & tokens" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Server runtimes, HTTP services, routing, and controller logic.",
    skills: [
      { name: "Node.js", context: "Server-side runtime" },
      { name: "Express.js", context: "RESTful API routes & middleware" },
      { name: "REST APIs", context: "Endpoint design & integration" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Data persistence, schema design, and cloud store integration.",
    skills: [
      { name: "MongoDB", context: "Document data modeling" },
      { name: "Firebase", context: "Realtime data & cloud utilities" },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    icon: Wrench,
    description: "Version control, workflow efficiency, and production deployment.",
    skills: [
      { name: "Git & GitHub", context: "Version control & collaboration" },
      { name: "VS Code", context: "Primary development workspace" },
      { name: "Vercel", context: "Deployment & performance telemetry" },
      { name: "EmailJS", context: "Client-side mail integration" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10 border-b border-[#E5DFD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#E5DFD3]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary font-mono mb-3">
              <span>03</span>
              <span className="w-8 h-px bg-primary/40" />
              <span>Technical Skills</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground">
              Technical <span className="italic text-primary">Capabilities</span>
            </h2>
          </div>

          <p className="hidden md:block max-w-xs text-xs text-muted-foreground leading-relaxed font-sans text-right">
            Organized taxonomy of tools and frameworks confirmed through active codebase implementations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-7 rounded-xl border border-[#E5DFD3] bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-md bg-[#F4EFE6] text-primary group-hover:bg-[#EBF3F1] transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {category.skills.length} competencies
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E5DFD3]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded bg-[#F8F6F0] border border-[#EBE5DB] flex flex-col gap-0.5 hover:border-primary/40 hover:bg-[#EBF3F1] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      </div>
                      {skill.context && (
                        <span className="text-[10px] text-muted-foreground font-sans">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
