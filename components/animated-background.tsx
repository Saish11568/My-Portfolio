"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px]"
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating particles - Only render on client to avoid hydration mismatch */}
      {mounted && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated rings */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] border border-primary/10 rounded-full"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
        className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] border border-primary/5 rounded-full"
      />
    </div>
  )
}
