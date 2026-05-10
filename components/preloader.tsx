"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState<"counting" | "reveal" | "exit">("counting")

  // Smooth counter animation
  useEffect(() => {
    if (phase !== "counting") return

    const duration = 2500
    const steps = 100
    const increment = 100 / steps
    const stepDuration = duration / steps

    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= 100) {
        setCount(100)
        clearInterval(interval)
        setTimeout(() => setPhase("reveal"), 300)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [phase])

  // Handle exit
  useEffect(() => {
    if (phase === "reveal") {
      const timeout = setTimeout(() => {
        setPhase("exit")
        setTimeout(onComplete, 1000)
      }, 1800)
      return () => clearTimeout(timeout)
    }
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)",
              }}
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Horizontal lines decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${12 + i * 12}%`,
                  left: 0,
                  right: 0,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ delay: i * 0.1, duration: 1 }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative h-full flex flex-col items-center justify-center">

            {/* Counter phase */}
            <AnimatePresence>
              {phase === "counting" && (
                <motion.div
                  className="relative"
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute -inset-20 rounded-full border border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  </motion.div>

                  {/* Inner rotating ring */}
                  <motion.div
                    className="absolute -inset-12 rounded-full border border-primary/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/80" />
                  </motion.div>

                  {/* Progress arc */}
                  <svg className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary/10"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-primary"
                      strokeDasharray="301.59"
                      strokeDashoffset={301.59 - (301.59 * count) / 100}
                    />
                  </svg>

                  {/* Counter number */}
                  <div className="relative flex items-center justify-center w-40 h-40">
                    <motion.span
                      className="text-7xl font-light tracking-tighter text-foreground tabular-nums"
                      key={count}
                    >
                      {count}
                    </motion.span>
                    <span className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-primary">%</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reveal phase */}
            <AnimatePresence>
              {phase === "reveal" && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Expanding circle */}
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 80, 80], opacity: [1, 0.5, 0] }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  />

                  {/* Name reveal with mask */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                        {"SAISH".split("").map((letter, i) => (
                          <motion.span
                            key={i}
                            className="inline-block"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.4 + i * 0.08,
                              duration: 0.6,
                              ease: [0.215, 0.61, 0.355, 1],
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </h1>
                    </motion.div>
                  </div>

                  {/* Subtitle with line animation */}
                  <div className="relative mt-6 flex items-center gap-4">
                    <motion.div
                      className="h-px bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: 60 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    />
                    <motion.span
                      className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      Full Stack Developer
                    </motion.span>
                    <motion.div
                      className="h-px bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: 60 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    />
                  </div>

                  {/* Decorative corner elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-20 h-20 border-l-2 border-t-2 border-primary/30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-20 h-20 border-r-2 border-b-2 border-primary/30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom text */}
            <motion.div
              className="absolute bottom-12 left-0 right-0 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground tracking-widest uppercase">
                <motion.div
                  className="w-1 h-1 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span>{phase === "counting" ? "Loading Experience" : "Welcome"}</span>
                <motion.div
                  className="w-1 h-1 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

          </div>

          {/* Exit curtains */}
          <AnimatePresence>
            {phase === "exit" && (
              <>
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/2 bg-background z-50"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.div
                  className="absolute inset-y-0 right-0 w-1/2 bg-background z-50"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
