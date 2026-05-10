"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  splitBy?: "letter" | "word"
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  splitBy = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const items = splitBy === "letter" ? children.split("") : children.split(" ")

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", rotateX: -90 }}
            animate={isInView ? { y: 0, rotateX: 0 } : { y: "100%", rotateX: -90 }}
            transition={{
              duration: 0.8,
              delay: delay + index * (splitBy === "letter" ? 0.03 : 0.08),
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {item}
            {splitBy === "word" && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
