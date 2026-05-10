"use client"

import { useState } from "react"
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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <main 
        className={`min-h-screen bg-background text-foreground relative transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
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
