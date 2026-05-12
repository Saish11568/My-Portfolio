"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { AnimatedBackground } from "@/components/animated-background"
import { Preloader } from "@/components/preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <CustomCursor />
        <AnimatedBackground />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}