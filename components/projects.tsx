"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  problem: string
  description: string
  features: string[]
  tech: string[]
  github: string
  demo?: string
  featured: boolean
  previewType: "transit" | "agri" | "print" | "vendor" | "hunger"
}

const projects: Project[] = [
  {
    id: "bustrack",
    title: "BusTrack",
    subtitle: "Real-Time Public Transit Tracking System",
    problem:
      "Daily commuters face unpredictable bus arrival times and lack visibility into active transit routes and schedule disruptions.",
    description:
      "A real-time bus tracking application engineered to streamline public transportation management and deliver reliable transit visibility for passengers.",
    features: [
      "Real-time route mapping and bus location tracking",
      "Stop-by-stop schedule information and arrival estimates",
      "Clean, mobile-optimized interface for on-the-go commuters",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
    github: "https://github.com/Saish11568/Bus-Tracking-System",
    featured: true,
    previewType: "transit",
  },
  {
    id: "agrismart",
    title: "AgriSmart / FarmChain",
    subtitle: "Agricultural Supply Chain Transparency Platform",
    problem:
      "Agricultural distribution networks often lack verifiable custody tracking, leaving farmers vulnerable to price exploitation and consumers unable to confirm origin.",
    description:
      "A web-based platform facilitating transparent, verifiable movement of agricultural produce across the entire value chain from farms to final consumers.",
    features: [
      "Role-based dashboards for farmers, distributors, retailers, and consumers",
      "Batch ID traceability system to monitor origin, harvest date, and transit status",
      "Centralized logs for verifiable produce custody and price transparency",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    github: "https://github.com/Saish11568/FARMCHAIN",
    featured: true,
    previewType: "agri",
  },
  {
    id: "printshop",
    title: "PrintShop Management",
    subtitle: "Full-Stack Print Workflow & Queue Architecture",
    problem:
      "Campus and commercial print centers experience disorganized in-person queues, manual order logging, and difficult file tracking.",
    description:
      "A full-stack print shop management platform that automates print requests, user authentication, and job progression across academic and commercial centers.",
    features: [
      "Role-based access control for students, shopkeepers, and administrators",
      "Digital document submission with configuration for paper, color, and copies",
      "Real-time queue tracking and administrative fulfillment dashboard",
    ],
    tech: ["JavaScript", "Node.js", "Express", "REST APIs"],
    github: "https://github.com/Saish11568/print-shop",
    featured: true,
    previewType: "print",
  },
  {
    id: "vendor",
    title: "Vendor Marketplace",
    subtitle: "Merchant Hub & Local Commerce Interface",
    problem:
      "Independent vendors require lightweight tools to catalog goods and manage consumer orders without complex enterprise overhead.",
    description:
      "A commerce platform connecting buyers and local merchants with streamlined product catalog management, item filtering, and direct transaction workflows.",
    features: [
      "Dynamic product listing with categorization and pricing controls",
      "Responsive customer storefront with cart management",
      "Direct merchant inventory update controls",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Saish11568/vendor",
    featured: false,
    previewType: "vendor",
  },
  {
    id: "zero-hunger",
    title: "Zero Hunger",
    subtitle: "Surplus Food Redistribution Platform",
    problem:
      "Valuable commercial surplus food is discarded daily while local communities experience food insecurity due to lack of coordination.",
    description:
      "A platform engineered to bridge the gap between surplus food providers and community relief organizations through responsive matching and communication.",
    features: [
      "Donor food post interface with quantity and perishable timeframe logs",
      "Beneficiary claim system for efficient collection coordination",
      "Organized distribution routing to reduce food waste",
    ],
    tech: ["Python", "Web Technologies"],
    github: "https://github.com/Saish11568/ZERO_HUNGER",
    featured: false,
    previewType: "hunger",
  },
]

function ProjectPreviewVisual({ type }: { type: Project["previewType"] }) {
  if (type === "transit") {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between bg-[#F4EFE6]/70 border-b lg:border-b-0 lg:border-r border-[#E5DFD3] select-none group-hover:bg-[#F4EFE6]/90 transition-colors">
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
              Transit Route #42A — Active
            </span>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">
            GPS Signal: 98%
          </span>
        </div>

        {/* Route progression diagram */}
        <div className="my-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
            <span>Terminal Station</span>
            <span className="text-primary font-semibold">Live: Stop 4 (Market)</span>
            <span>Campus Gate</span>
          </div>
          <div className="relative w-full h-2 bg-[#E5DFD3] rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-primary rounded-full transition-all duration-500" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="p-2.5 rounded bg-white/80 border border-[#E5DFD3] hover:border-primary/40 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Next Stop</div>
              <div className="text-xs font-semibold text-foreground">City Central</div>
            </div>
            <div className="p-2.5 rounded bg-white/80 border border-[#E5DFD3] hover:border-primary/40 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Est. Arrival</div>
              <div className="text-xs font-semibold text-primary">~4 Mins</div>
            </div>
            <div className="p-2.5 rounded bg-white/80 border border-[#E5DFD3] hover:border-primary/40 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Occupancy</div>
              <div className="text-xs font-semibold text-foreground">Moderate (64%)</div>
            </div>
          </div>
        </div>

        <div className="text-[11px] font-mono text-muted-foreground flex items-center justify-between pt-3 border-t border-[#E5DFD3]">
          <span>Interface: Commuter Real-Time Map</span>
          <span className="text-primary font-medium">BusTrack v1.0</span>
        </div>
      </div>
    )
  }

  if (type === "agri") {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between bg-[#F4EFE6]/70 border-b lg:border-b-0 lg:border-r border-[#E5DFD3] select-none group-hover:bg-[#F4EFE6]/90 transition-colors">
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
              Batch #AG-2024-8841
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
            Status: Verified
          </span>
        </div>

        {/* Chain custody timeline */}
        <div className="my-6 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-white/90 border border-[#E5DFD3] text-xs hover:border-primary/40 transition-colors">
              <span className="font-mono text-primary font-medium">01. Origin Farm</span>
              <span className="text-muted-foreground font-mono">Harvest Logged · Day 1</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-white/90 border border-[#E5DFD3] text-xs hover:border-primary/40 transition-colors">
              <span className="font-mono text-primary font-medium">02. Regional Hub</span>
              <span className="text-muted-foreground font-mono">Cold Storage QA · Day 2</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-primary/10 border border-primary/30 text-xs">
              <span className="font-mono text-primary font-bold">03. Retail Hub</span>
              <span className="text-primary font-mono font-medium">In Distribution · Active</span>
            </div>
          </div>
          <div className="p-2.5 rounded bg-white/80 border border-[#E5DFD3] flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground">Stakeholder View</span>
            <span className="text-foreground font-medium">Role: Distributor Dashboard</span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-muted-foreground flex items-center justify-between pt-3 border-t border-[#E5DFD3]">
          <span>Protocol: FarmChain Batch Ledger</span>
          <span className="text-primary font-medium">Traceability Verified</span>
        </div>
      </div>
    )
  }

  if (type === "print") {
    return (
      <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between bg-[#F4EFE6]/70 border-b lg:border-b-0 lg:border-r border-[#E5DFD3] select-none group-hover:bg-[#F4EFE6]/90 transition-colors">
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
              Print Dispatch Console
            </span>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">
            Queue: 6 Active
          </span>
        </div>

        {/* Queue table preview */}
        <div className="my-6 space-y-2 font-mono text-xs">
          <div className="p-2 rounded bg-white/90 border border-[#E5DFD3] flex items-center justify-between hover:border-primary/40 transition-colors">
            <div>
              <span className="text-foreground font-semibold">ORD-1092</span>
              <span className="text-muted-foreground ml-2 text-[11px]">Thesis_Report.pdf</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-medium">
              Completed
            </span>
          </div>

          <div className="p-2 rounded bg-primary/10 border border-primary/30 flex items-center justify-between">
            <div>
              <span className="text-primary font-semibold">ORD-1093</span>
              <span className="text-foreground ml-2 text-[11px]">Lab_Manual_v2.docx</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-medium">
              Printing (34/50)
            </span>
          </div>

          <div className="p-2 rounded bg-white/90 border border-[#E5DFD3] flex items-center justify-between hover:border-primary/40 transition-colors">
            <div>
              <span className="text-foreground font-semibold">ORD-1094</span>
              <span className="text-muted-foreground ml-2 text-[11px]">Architecture_Dwg.pdf</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-medium">
              Queued
            </span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-muted-foreground flex items-center justify-between pt-3 border-t border-[#E5DFD3]">
          <span>Role: Shopkeeper Console</span>
          <span className="text-primary font-medium">Express.js Backend</span>
        </div>
      </div>
    )
  }

  if (type === "vendor") {
    return (
      <div className="w-full h-40 p-5 flex flex-col justify-between bg-[#F4EFE6]/60 border-b border-[#E5DFD3] select-none">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-semibold text-foreground uppercase">Merchant Catalog View</span>
          <span className="text-muted-foreground">32 Items Active</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
          <div className="p-2 rounded bg-white border border-[#E5DFD3]">
            <div className="text-[10px] text-muted-foreground">Category</div>
            <div className="font-medium text-foreground">Produce</div>
          </div>
          <div className="p-2 rounded bg-white border border-[#E5DFD3]">
            <div className="text-[10px] text-muted-foreground">Stock</div>
            <div className="font-medium text-foreground">120 Units</div>
          </div>
          <div className="p-2 rounded bg-white border border-[#E5DFD3]">
            <div className="text-[10px] text-muted-foreground">Routing</div>
            <div className="font-medium text-primary">Direct</div>
          </div>
        </div>
      </div>
    )
  }

  // Hunger redistribution preview
  return (
    <div className="w-full h-40 p-5 flex flex-col justify-between bg-[#F4EFE6]/60 border-b border-[#E5DFD3] select-none">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="font-semibold text-foreground uppercase">Redistribution Logistics</span>
        <span className="text-emerald-800 font-medium">Relief Matched</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
        <div className="p-2 rounded bg-white border border-[#E5DFD3]">
          <div className="text-[10px] text-muted-foreground">Provider</div>
          <div className="font-medium text-foreground">Community Pantry</div>
        </div>
        <div className="p-2 rounded bg-white border border-[#E5DFD3]">
          <div className="text-[10px] text-muted-foreground">Portions</div>
          <div className="font-medium text-primary">85 Meals</div>
        </div>
        <div className="p-2 rounded bg-white border border-[#E5DFD3]">
          <div className="text-[10px] text-muted-foreground">Transit</div>
          <div className="font-medium text-foreground">Scheduled</div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const secondaryProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10 border-b border-[#E5DFD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#E5DFD3]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary font-mono mb-3">
              <span>02</span>
              <span className="w-8 h-px bg-primary/40" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground">
              Featured <span className="italic text-primary">Projects</span>
            </h2>
          </div>

          <p className="hidden md:block max-w-xs text-xs text-muted-foreground leading-relaxed font-sans text-right">
            Prioritized engineering projects addressing transit tracking, agricultural traceability, and workflow management.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16 mb-24">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="rounded-xl border border-[#E5DFD3] bg-card overflow-hidden hover:border-primary/40 hover:shadow-xs transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                {/* Visual Preview */}
                <div className="lg:col-span-5 min-h-[260px] lg:min-h-full">
                  <ProjectPreviewVisual type={project.previewType} />
                </div>

                {/* Project Details */}
                <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Project 0{idx + 1}
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-all duration-200 border border-border px-3 py-1 rounded-full hover:border-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                          aria-label={`View source code for ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                          <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                        </a>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-primary font-mono mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Problem Solved */}
                    <div className="mb-6 p-4 rounded-md bg-[#F4EFE6]/50 border border-[#E5DFD3]">
                      <h4 className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Problem Addressed
                      </h4>
                      <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Implemented Features */}
                    <div className="mb-6">
                      <h4 className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                        Key Implemented Features
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs md:text-sm text-foreground/80 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-[#E5DFD3] flex flex-wrap items-center gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#F3ECE1] text-foreground/90 border border-[#E5DFD3] hover:border-primary/40 hover:bg-[#EBF3F1] hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <div className="pt-12 border-t border-[#E5DFD3]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-mono mb-8">
            <span className="w-6 h-px bg-[#E5DFD3]" />
            <span>Additional Authentic Projects</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-[#E5DFD3] bg-card overflow-hidden hover:border-primary/40 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <ProjectPreviewVisual type={project.previewType} />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-primary font-mono mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="text-xs text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Problem: </span>
                      {project.problem}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0">
                  <div className="pt-4 border-t border-[#E5DFD3] flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#F3ECE1] text-foreground/80 border border-[#E5DFD3] hover:border-primary/40 hover:bg-[#EBF3F1] hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
