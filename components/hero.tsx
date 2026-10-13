"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-10 border-b border-[#E5E7EB] bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Sub-header / Metadata bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#E5E7EB] text-xs uppercase tracking-widest text-muted-foreground font-sans"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span>Computer Science & Engineering</span>
          </div>
          <div>Focus: Software Development & Modern Technologies</div>
        </motion.div>

        {/* Main Headline & Lead */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-baseline">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-foreground leading-[1.04] mb-8"
            >
              Saish <span className="italic font-serif text-primary">Malalikar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl font-sans font-normal"
            >
              Computer Science and Engineering student interested in software development and modern technologies. Focused on building purposeful, reliable web applications with clean architecture and thoughtful user experiences.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary button: blue background with white text */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary button: white background, dark text and a subtle gray border */}
              <a
                href="https://github.com/Saish11568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5E7EB] bg-white text-foreground text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                <span>Contact</span>
              </a>
            </motion.div>
          </div>

          {/* Editorial Aside Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-4 lg:border-l lg:border-[#E5E7EB] lg:pl-10 space-y-8"
          >
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold mb-3">
                Key Interests
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Full-stack web engineering, distributed supply-chain platforms, real-time public transit tracking, and modern JavaScript/Python toolchains.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold mb-3">
                Connect
              </h2>
              <div className="space-y-2.5">
                <a
                  href="https://github.com/Saish11568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span>github.com/Saish11568</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>

                <a
                  href="https://www.linkedin.com/in/saish-malalikar-7861a8389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>

                <a
                  href="mailto:saishmalalikar5@gmail.com"
                  className="flex items-center justify-between text-sm text-foreground/80 hover:text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span>saishmalalikar5@gmail.com</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
