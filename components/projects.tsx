"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { useRef, useState } from "react"
import { TiltCard } from "./tilt-card"
import { LineReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"

const projects = [
  {
    title: "FarmChain",
    description:
      "A web-based platform enabling transparent and traceable movement of farm produce from farmers to distributors to retailers to consumers. Each stakeholder gets a dedicated dashboard to manage produce and track the product journey using batch IDs.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saish11568/FARMCHAIN",
    featured: true,
    number: "01",
  },
  {
    title: "Print Shop Management",
    description:
      "A full-stack print shop management system enabling seamless order handling, authentication, and role-based dashboards for students, shopkeepers, and admins.",
    tech: ["JavaScript", "Node.js", "Express"],
    github: "https://github.com/Saish11568/print-shop",
    featured: true,
    number: "02",
  },
  {
    title: "Bus Tracking System",
    description:
      "Real-time bus tracking application for efficient public transportation management and passenger convenience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saish11568/Bus-Tracking-System",
    featured: false,
  },
  {
    title: "Vendor Marketplace",
    description:
      "A vendor marketplace platform connecting buyers and sellers with streamlined product management and transactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saish11568/vendor",
    featured: false,
  },
  {
    title: "Zero Hunger",
    description:
      "A project aimed at reducing food waste and connecting surplus food with those in need through an intuitive platform.",
    tech: ["Python", "Web Dev"],
    github: "https://github.com/Saish11568/ZERO_HUNGER",
    featured: false,
  },
]

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard className="group" tiltAmount={5}>
        <div className="relative p-8 md:p-12 rounded-3xl border border-border bg-card/20 backdrop-blur-sm overflow-hidden">
          {/* Background gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Project number */}
          <motion.span
            className="absolute top-6 right-6 text-8xl md:text-9xl font-bold text-primary/5"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            {project.number}
          </motion.span>

          <div className="relative z-10">
            {/* Featured label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">
                Featured Project
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text group-hover:from-primary group-hover:to-foreground transition-all duration-500">
                {project.title}
              </span>
            </motion.h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                  className="px-4 py-2 text-sm font-mono rounded-full bg-secondary text-secondary-foreground border border-border hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <MagneticButton href={project.github} magnetStrength={0.3}>
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Source Code</span>
                </div>
              </MagneticButton>
              <MagneticButton href={project.github} magnetStrength={0.3}>
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Live Demo</span>
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-primary pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </TiltCard>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative h-full p-6 rounded-2xl border border-border bg-card/20 backdrop-blur-sm overflow-hidden"
      >
        {/* Gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <motion.div
              animate={{ rotate: isHovered ? -10 : 0, scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
            >
              <Folder className="w-6 h-6 text-primary" />
            </motion.div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              data-cursor="View"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Title */}
          <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h4>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      id="projects"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -left-40 top-1/4 text-[300px] font-bold text-primary/[0.02] select-none pointer-events-none"
      >
        {"</>"}
      </motion.div>

      {/* Section header */}
      <div className="mb-20">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm inline-flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-primary" />
          02 // Projects
        </motion.span>
        <LineReveal className="mt-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I&apos;ve <span className="text-primary">Built</span>
          </h2>
        </LineReveal>
      </div>

      {/* Featured projects */}
      <div className="space-y-12 mb-20">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
      </div>

      {/* Other projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold text-muted-foreground inline-flex items-center gap-4">
          <span className="w-12 h-[1px] bg-border" />
          Other Noteworthy Projects
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((p) => !p.featured)
          .map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
      </div>
    </section>
  )
}
