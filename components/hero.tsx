"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { TextReveal } from "./text-reveal"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <motion.div style={{ y, opacity, scale }} className="max-w-6xl relative z-10">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden mb-6"
        >
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-primary font-mono text-sm md:text-base inline-flex items-center gap-3"
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, delay: 1.5, repeat: 3 }}
              className="inline-block origin-bottom-right"
            >
              {"//"}
            </motion.span>
            <span className="relative">
              Hello World
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </span>
          </motion.p>
        </motion.div>

        {/* Main heading with letter animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
          <TextReveal delay={0.3}>Saish</TextReveal>
          <br />
          <span className="text-primary">
            <TextReveal delay={0.5}>Malalikar</TextReveal>
          </span>
        </h1>

        {/* Role with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mb-8 flex items-center gap-3"
        >
          <motion.span
            className="inline-block w-12 h-[2px] bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
          <span className="relative">
            Full Stack Developer
            <motion.span
              className="absolute right-0 top-0 h-full w-[3px] bg-primary"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </span>
        </motion.div>

        {/* Description with stagger */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          B.Tech student passionate about building with{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Python
          </motion.span>{" "}
          and crafting engaging web experiences. Exploring full-stack development and{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            open source
          </motion.span>
          .
        </motion.p>

        {/* Social links with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Saish11568", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:saish@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, index) => (
            <MagneticButton key={label} href={href} magnetStrength={0.4}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1.4 + index * 0.1,
                }}
                className="p-4 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              </motion.div>
            </MagneticButton>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="ml-4"
          >
            <MagneticButton
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium inline-flex items-center gap-2 group"
            >
              View Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {"->"}
              </motion.span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-colors flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-10 md:right-20 text-[150px] md:text-[250px] font-bold text-primary/5 select-none pointer-events-none"
      >
        SM
      </motion.div>
    </section>
  )
}
