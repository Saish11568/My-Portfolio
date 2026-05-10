"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const words = ["BUILD", "CREATE", "INNOVATE", "DESIGN", "DEVELOP"]

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

  return (
    <footer
      ref={containerRef}
      className="relative py-20 overflow-hidden border-t border-border"
    >
      {/* Scrolling text */}
      <motion.div style={{ x, opacity }} className="whitespace-nowrap mb-16">
        <div className="flex">
          {[...words, ...words, ...words].map((word, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary/10 mx-8"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl font-bold tracking-tighter">
              SM<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            {["GitHub", "LinkedIn", "Email"].map((link) => (
              <motion.a
                key={link}
                href={
                  link === "GitHub"
                    ? "https://github.com/Saish11568"
                    : link === "LinkedIn"
                    ? "https://www.linkedin.com/in/saish-malalikar-7861a8389?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    : "mailto:saishmalalikar5@gmail.com"
                }
                target={link !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            &copy; {new Date().getFullYear()} Saish Malalikar. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none" />
    </footer>
  )
}
