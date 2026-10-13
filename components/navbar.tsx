"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-xs"
            : "bg-white/80 backdrop-blur-xs py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="group flex items-baseline gap-3 text-foreground hover:text-primary transition-colors"
            aria-label="Saish Malalikar portfolio home"
          >
            <span className="font-serif text-xl md:text-2xl font-normal tracking-tight">
              Saish Malalikar
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-muted-foreground border-l border-[#E5E7EB] pl-3 font-sans">
              Computer Science & Eng.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative py-1"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-white pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono">
                Index
              </span>
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-primary transition-colors flex items-center justify-between py-2 border-b border-[#E5E7EB]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-muted-foreground">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#E5E7EB] flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <a
                  href="https://github.com/Saish11568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saish-malalikar-7861a8389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:saishmalalikar5@gmail.com"
                  className="hover:text-primary flex items-center gap-1"
                >
                  Email <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
