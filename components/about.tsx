"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect } from "react"
import { LineReveal } from "./text-reveal"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

function StatCard({
  value,
  label,
  suffix = "",
  index,
}: {
  value: number
  label: string
  suffix?: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-8 rounded-2xl border border-border bg-card/20 backdrop-blur-sm overflow-hidden cursor-default"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="text-5xl font-bold text-primary mb-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.1 + 0.2,
          }}
        >
          <AnimatedCounter value={value} suffix={suffix} />
        </motion.div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>

      {/* Decorative corner */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: 7, label: "Public Repositories", suffix: "+" },
    { value: 75, label: "Commit Activity", suffix: "%" },
    { value: 6, label: "Followers", suffix: "" },
    { value: 8, label: "Following", suffix: "" },
  ]

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 relative"
      id="about"
    >
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
          03 // About
        </motion.span>
        <LineReveal className="mt-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get to <span className="text-primary">Know Me</span>
          </h2>
        </LineReveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              text: (
                <>
                  I&apos;m a <span className="text-foreground font-medium">B.Tech student</span> with a
                  passion for building things that live on the internet. My interest
                  in web development started when I first discovered how websites
                  work — and I&apos;ve been hooked ever since.
                </>
              ),
            },
            {
              text: (
                <>
                  Fast-forward to today, I&apos;ve had the privilege of working on
                  various projects ranging from{" "}
                  <span className="text-primary">supply chain platforms</span> to{" "}
                  <span className="text-primary">print shop management systems</span>.
                  My main focus these days is building accessible, inclusive products
                  and digital experiences.
                </>
              ),
            },
            {
              text: (
                <>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                  contributing to open source, or learning about the latest in web
                  development.
                </>
              ),
            },
          ].map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {item.text}
            </motion.p>
          ))}

          {/* Tech interests tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 pt-4"
          >
            {["Web Dev", "Open Source", "Python", "Full Stack", "UI/UX"].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                  className="px-4 py-2 text-sm rounded-full border border-border bg-card/30 cursor-default transition-colors"
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -left-20 bottom-20 text-[200px] font-bold text-primary/[0.02] select-none pointer-events-none"
      >
        WHO?
      </motion.div>
    </section>
  )
}
